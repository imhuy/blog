import { Container } from '@material-ui/core';
import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useHistory, useParams, useLocation } from "react-router-dom";
const data = {
    id: 1,
    title: 'Instagram After Dark Is Getting Sexy',
    content: '<h1>Even though that PWAs aren’t based on a specific technology</h1>  but merely an approach with principles to build web applications - they involve technical ecosystems, Web APIs and practices. Integrating React’s ecosystem, for instance, with the available Web APIs - allows us to make a fully-responsive application that’s also discoverable and well-performed. Sometimes, however, it’s not so straightforward to mix them together, both for technical and conceptual aspects. Even though that PWAs aren’t based on a specific technology, but merely an approach with principles to build web applications - they involve technical ecosystems, Web APIs and practices. Integrating React’s ecosystem, for instance, with the available Web APIs - allows us to make a fully-responsive application that’s also discoverable and well-performed. Sometimes, however, it’s not so straightforward to mix them together, both for technical and conceptual aspects. Even though that PWAs aren’t based on a specific technology, but merely an approach with principles to build web applications - they involve technical ecosystems, Web APIs and practices. Integrating React’s ecosystem, for instance, with the available Web APIs - allows us to make a fully-responsive application that’s also discoverable and well-performed. Sometimes, however, it’s not so straightforward to mix them together, both for technical and conceptual aspects. Even though that PWAs aren’t based on a specific technology, but merely an approach with principles to build web applications - they involve technical ecosystems, Web APIs and practices. Integrating React’s ecosystem, for instance, with the available Web APIs - allows us to make a fully-responsive application that’s also discoverable and well-performed. Sometimes, however, it’s not so straightforward to mix them together, both for technical and conceptual aspects. ',
}


export default function Post() {
    let seLocation = useLocation();
    const [name, setName] = useState('')
    const [title, setTitle] = useState([])
    const [obj, setObj] = useState({})
    let id = seLocation.state.fromDashboard

    function createMarkup() {
        return { __html: obj.content };
    }
    async function FetData() {
        var rs = await fetch(`http://localhost/getbyid/${id}`);
        var responjson = await rs.json();
        var obj = {
            title: responjson[0].title,
            content: responjson[0].content,
            tag: responjson[0].tag,
            category: responjson[0].category,
            description: responjson[0].description,
            image: responjson[0].image,
        }

        setObj(obj)
        return responjson;
    }

    useEffect(() => {

        FetData();

    }, [id]);

    console.log(obj.tag)
    return (

        <div>
            <Header />
            <Container maxWidth='md' style={{ backgroundColor: '#fff' }} >
                <div>
                    <h1 style={{ fontFamily: 'Oswald', fontSize: "2.5em", fontWeight: 'bold' }} >{obj.title}</h1>

                    <div>
                        <p dangerouslySetInnerHTML={createMarkup()} style={{ lineHeight: 2.5, textAlign: 'left', margin: 10, fontFamily: 'sans-serif' }} />
                    </div>

                </div>
            </Container>
        </div>
    )
}
