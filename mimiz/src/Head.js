import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function Head(){
    return (
        <div style={{position: 'fixed', width: '100%', height: '100%'}}>
            <Layout style={{background: 'url(https://wallpaperaccess.com//full/2032872.jpg) center / cover'}}>
                <Header transparent title="Fresh memes from the oven" style={{color: 'white'}}>
                    <Navigation>
                        <a href="GitHub">GitHub</a>
                        <a href="cc">Give me your credit card credentials</a>
                    </Navigation>
                </Header>
                <Content />
            </Layout>
        </div>
    )
}
export default Head