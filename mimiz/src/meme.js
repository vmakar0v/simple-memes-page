import React from 'react'
import {Card, CardTitle, CardActions} from 'react-mdl'


function Meme(){
    return(
        <div>
            <Card shadow={0} style={{width: '500px', height: '600px', background: 'url() center / cover', margin: 'auto'}}>
                <CardTitle expand />
            <CardActions style={{height: '50px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                    Image.jpg
                </span>
            </CardActions>
        </Card>
    </div>
    )
}
export default Meme