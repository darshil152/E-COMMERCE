import { ThirtyFpsSelect } from '@mui/icons-material';
import React, { Component } from 'react'
import { UserConsumer } from './cartcontext'


export default class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: JSON.parse(localStorage.getItem("sneakersdata")),

        }
    }


    click = (id) => {
        const newPeople = this.state.people.filter((items) => items.id !== id);
        this.setState({ people: newPeople })
        localStorage.setItem("sneakersdata", JSON.stringify(newPeople));
        // window.location.href = './new'
    }

    
    render() {
        return (
            <>
                <div className='conatainer gth'>
                    <div className='row'>
                        <div className='col-sm'>
                            <h1 className='bag'>Bag</h1>
                            <UserConsumer>
                                {
                                    (asd) => {
                                        return (
                                            asd[0].length > 0 && asd[0].map((item, i) => {
                                                return (
                                                    <>

                                                        <div className='boxes'>
                                                            <div className='images'>
                                                                <img src={item.file[0]} style={{ width: "160px" }} />
                                                            </div>
                                                            <div className='detail'>
                                                                <h5 className='name'>{item.name}</h5>
                                                                <h5 className='sku'>{item.sku}</h5>
                                                                <h5 className='sku'>MRP:₹ <b>{item.price}</b></h5>
                                                                <div>
                                                                    <button onClick={() => this.click(item.id)}>Delete</button>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </>
                                                )
                                            })
                                        )
                                    }
                                }
                            </UserConsumer>
                        </div>
                        <div className='col-sm'>
                            <h1 className='bag'>Summary</h1>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}













