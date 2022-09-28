import { TypeAnimation } from 'react-type-animation';

function Title(props: any) {
    return (
        <TypeAnimation
            sequence={[
                props.title, // Types 'One'
                1000, // Waits 1s
            ]}
            wrapper="h1"
            cursor={true}
            repeat={0}
            speed={1}
            style={{}}
        />
    )
}

export default Title;