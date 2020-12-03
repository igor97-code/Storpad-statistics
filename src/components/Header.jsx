import React from 'react'

export default () => {
    return (
        <header>
            <div className="header">
                <div className="personalAreaBar">
                    <a href="http://storpad.com">
                        <img src="img/avatar.svg" alt="Аватар" className="icon imgAvatar iconLarge"/>
                        <p className="name">Lestate15</p>
                    </a>
                    <a href="http://storpad.com">
                        <div className="icon imgNotification iconLarge notifyDrop"/>
                    </a>
                </div>
            </div>
        </header>
    )
}