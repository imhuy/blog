import Header from '../../components/Header'
import { Container } from '@material-ui/core';
import Head from 'next/head'
import Icon from './icon'

export default function AboutPage(props) {
  console.log('props', props)
  const obj = props;
  function createMarkup() {
    return { __html: obj.content };
  }

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>

      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  return (
    <>
      <Header />
      <Container maxWidth='md' style={{ backgroundColor: '#fff' }} >
        <div>

          <h1 style={{ fontFamily: 'Oswald', fontSize: "2.5em", fontWeight: 'bold' }} >{obj.title}</h1>
          <div>
            <Icon />
          </div>

          <div >

            <img style={{ borderRadius: 50 }} alt="Kriss" class="icon" src="https://miro.medium.com/fit/c/96/96/1*RH-ihLouYINXUpRfL4Pc7g.jpeg" width="48" height="48" />
            <span style={{}}> huydev </span>
            <span style={{ fontSize: 16 }}> Apr 4,2020</span>
          </div>

          <div>
            <p dangerouslySetInnerHTML={createMarkup()} style={{ lineHeight: 2.5, textAlign: 'left', margin: 10, fontFamily: 'sans-serif' }} />
          </div>
          <div>
            <NumberList numbers={obj.tag} />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  var rs = await fetch(`http://localhost/getbyid/5ef44cb20f9b8a8a90ec3513`);
  var responjson = await rs.json()
  console.log('rs1111', responjson)
  return { props: responjson[0] }
}