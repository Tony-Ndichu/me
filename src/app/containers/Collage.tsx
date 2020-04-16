import * as React from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import spincityImg from './assets/spincity.png';
import spincityDesktop from './assets/spincityDesktop.png';
// import bluemobile from './assets/bluemobile.png';
// import bluedesktop from './assets/bluedesktop.png';
// import s1 from './assets/s1.png';
// import s2 from './assets/s2.png';
import s3 from './assets/s3.png';
import s4 from './assets/s4.png';
// import s5 from './assets/s5.png';

interface IProps { }

const photos = [
    {
        src: spincityImg,
        width: 2, height: 4
    },
    {
        src: s3,
        width: 1, height: 1
    },
    {
        src: s4,
        width: 2, height: 4
    },
    {
        src: spincityDesktop,
        width: 1, height: 1
    },
    // {
    //     src: s1,
    //     width: 7, height: 5
    // },
    // {
    //     src: s2,
    //     width: 1, height: 1
    // },
    // {
    //     src: s3,
    //     width: 1, height: 1
    // },
    // {
    //     src: s4,
    //     width: 2, height: 4
    // },
    // {
    //     src: s5,
    //     width: 2, height: 4
    // },

];

const Collage: React.FC<IProps> = () => {

    return (
        <Container>
            <Gallery photos={photos} />
        </Container>

    )
}

const Container = styled.div`
width: 100%;
`;


export default Collage;