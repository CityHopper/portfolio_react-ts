import {memo, useRef, useState, RefObject, useCallback, useEffect} from 'react';
import '_about.scss';
import {useTranslation} from "react-i18next";

const texts: string[] = [
    'React',
    'Redux',
    'JavaScript(ES6+)',
    'TypeScript',
    'SCSS',
    'CSS3',
    "BEM",
    'HTML5',
    'Git',
    'AWS',
    'Python',
    'Flask',
    'Pandas',
    'BeautifulSoup/Selenium',
    'Zeplin',
    'Slack',
    'REST'
]

const computePosition = (
    idx: number,
    random: boolean = false,
    size: number
) => {
    if (random) idx = Math.floor(Math.random() * (texts.length + 1))

    const phi = Math.acos(-1 + (2 * idx + 1) / texts.length)
    const theta = Math.sqrt((texts.length + 1) * Math.PI) * phi

    return {
        x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
        y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
        z: (size * Math.cos(phi)) / 2
    }
}

const CreateTag = (idx: number, text: string, size: number) => {
    const tagRef = useRef<HTMLDivElement | null>(null)

    return {
        idx: idx,
        text: text,
        opacity: 0,
        filter: 'alpha(opacity=0)',
        transform: 'translate3d(-50%, -50%, 0) scale(1)',
        tagRef: tagRef,
        ...computePosition(idx, false, size)
    }
}

interface ItemProps {
    transform: string
    opacity: number
    filter: string
    idx: number
    text: string
    x: number
    y: number
    z: number
    scale?: number
    tagRef?: RefObject<HTMLSpanElement>
}

const createInitialState = (size: number) => {
    return texts.map((text, i) => {
        return CreateTag(i, text, size)
    })
}

const {radius, maxSpeed, initSpeed, direction} = {
    radius: 200 as number,
    maxSpeed: 10 as number,
    initSpeed: 20 as number,
    direction: 135 as number
}

const size = 1.5 * radius
const depth = 2 * radius


const WordSphere = memo(() => {
    const tagCloudRef = useRef<HTMLDivElement | null>(null)
    const [items, setItems] = useState<ItemProps[]>(createInitialState(size))

    const mouseX0 = useRef<number>(initSpeed * Math.sin(direction * (Math.PI / 180))) // prettier-ignore
    const mouseY0 = useRef<number>(-initSpeed * Math.cos(direction * (Math.PI / 180))) // prettier-ignore
    const mouseX = useRef<number>(mouseX0.current)
    const mouseY = useRef<number>(mouseY0.current)

    const next = useCallback(() => {
        const a = -(Math.min(Math.max(-mouseY.current, -size), size) / radius) * maxSpeed // prettier-ignore
        const b = (Math.min(Math.max(-mouseX.current, -size), size) / radius) * maxSpeed // prettier-ignore

        if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return // pause

        // calculate offset
        const l = Math.PI / 180
        const sc = [
            Math.sin(a * l),
            Math.cos(a * l),
            Math.sin(b * l),
            Math.cos(b * l)
        ]

        setItems((prev: any[]) => {
            return prev.map(item => {
                const rx1 = item.x
                const ry1 = item.y * sc[1] + item.z * -sc[0]
                const rz1 = item.y * sc[0] + item.z * sc[1]
                const rx2 = rx1 * sc[3] + rz1 * sc[2]
                const ry2 = ry1
                const rz2 = rz1 * sc[3] - rx1 * sc[2]
                const per = (2 * depth) / (2 * depth + rz2)

                item.scale = Number(per.toFixed(3))
                let alpha = per * per - 0.25
                alpha = Number((alpha > 1 ? 1 : alpha).toFixed(3))

                if (item?.tagRef?.current) {
                    const left = (item.x - item.tagRef.current.offsetWidth / 2).toFixed(2)
                    const top = (item.y - item.tagRef.current.offsetHeight / 2).toFixed(2)

                    return {
                        ...item,
                        x: rx2,
                        y: ry2,
                        z: rz2,
                        opacity: alpha,
                        transform: `translate3d(${left}px, ${top}px, 0) scale(${item.scale})`,
                        filter: `alpha(opacity=${100 * alpha})`
                    }
                }
            })
        })
    }, [])

    useEffect(() => {
        if (tagCloudRef?.current) {
            const interval = setInterval(next, 100)
            return () => clearInterval(interval)
        }
    }, [tagCloudRef])

    return (
        <div
            ref={tagCloudRef}
            className='tag-cloud'
            onMouseMove={ev => {
                if (tagCloudRef?.current) {
                    const rect = tagCloudRef.current.getBoundingClientRect()
                    mouseX.current = (ev.clientX - (rect.left + rect.width / 2)) / 5
                    mouseY.current = (ev.clientY - (rect.top + rect.height / 2)) / 5
                }
            }}
            style={{
                position: 'relative',
                width: `${2 * radius}px`,
                height: `${2 * radius}px`
            }}
        >
            {items.map(item => {
                return (
                    <span
                        key={item.idx}
                        className='tag-cloud__item'
                        ref={item.tagRef}
                        style={{
                            filter: item.filter,
                            opacity: item.opacity,
                            transform: item.transform
                        }}
                    >
            {item.text}
          </span>
                )
            })}
        </div>
    )
})


function About() {
    const [t] = useTranslation();
    return (
        <article className={"container"}>
            <section className={"container__half"}>
                <h1>About Myself</h1>
                <p>
                    {t("about:about-1")}
                </p>
                <p>
                    {t("about:about-2")}
                </p>
                <p>
                    {t("about:about-3")}
                </p>
            </section>
            <section className={"container__half flex__center"}>
                <WordSphere/>
            </section>
        </article>
    );
}

export default About;