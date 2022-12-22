import React from 'react'
import { UserContext } from './cartcontext'

export default function New() {
    return (
        <UserContext.Consumer>
            {
                (value) => {
                    return (
                        value.state.data.map((items) => {
                            <div>
                                <h1>{items.name}</h1>
                            </div>
                        })
                    )
                }
            }
        </UserContext.Consumer >
    )
}
