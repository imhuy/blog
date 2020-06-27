import { Container } from '@material-ui/core';
import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useHistory, useParams, useLocation } from "react-router-dom";
const data = {
    id: 1,
    title: 'Instagram After Dark Is Getting Sexy',
    content: '<h1>Even though that PWAs aren’t based on a specific technology</h1>  but merely an approach with principles to build web applications - they involve technical ecosystems, Web APIs and practices. Integrating React’s ecosystem, for instance, with the available Web APIs - allows us to make a fully-responsive application that’s also discoverable and well-performed. Sometimes, however, it’s not so straightforward to mix them together, both for technical and conceptual aspects. Even though that PWAs aren’t based on a specific technology, but merely an approach with principles to build web applications - they involve technical ecosystems, Web APIs and practices. Integrating React’s ecosystem, for instance, with the available Web APIs - allows us to make a fully-responsive application that’s also discoverable and well-performed. Sometimes, however, it’s not so straightforward to mix them together, both for technical and conceptual aspects. Even though that PWAs aren’t based on a specific technology, but merely an approach with principles to build web applications - they involve technical ecosystems, Web APIs and practices. Integrating React’s ecosystem, for instance, with the available Web APIs - allows us to make a fully-responsive application that’s also discoverable and well-performed. Sometimes, however, it’s not so straightforward to mix them together, both for technical and conceptual aspects. Even though that PWAs aren’t based on a specific technology, but merely an approach with principles to build web applications - they involve technical ecosystems, Web APIs and practices. Integrating React’s ecosystem, for instance, with the available Web APIs - allows us to make a fully-responsive application that’s also discoverable and well-performed. Sometimes, however, it’s not so straightforward to mix them together, both for technical and conceptual aspects. ',
}
function createMarkup() {
    return { __html: data.content };
}

async function FetData() {
    // let seLocation = useLocation();
    var rs = await fetch(`http://localhost/getbyid/5ef3109f66c09345c64c89d5`, {
        method: 'GET',
    });
    var itemResponse = await rs.json();
 
    return itemResponse;
}


export default function Post() {

    useEffect(async () => {
        FetData()
    });
    return (
        <div>
            <Header />
            <Container maxWidth='md' style={{ backgroundColor: '#fff' }} >
                <div>
                    <h1 style={{ fontFamily: 'Oswald', fontSize: "2.5em", fontWeight: 'bold' }} >{data.title}</h1>
                    {/* <div>
                            <p dangerouslySetInnerHTML={{ __html: data.content }} style={{ lineHeight: 2.5, textAlign: 'left', margin: 10, fontFamily: 'sans-serif' }}> </p>
                        </div> */}
                    <div>
                        <p dangerouslySetInnerHTML={createMarkup()} style={{ lineHeight: 2.5, textAlign: 'left', margin: 10, fontFamily: 'sans-serif' }} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
