const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img id="muffin" src="/images/choco-muffin.jpg" alt="chocolate chip muffin" />
                    <div>
                    Photo by <a href="https://unsplash.com/fr/@foodfaithfit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Taylor Kiser</a> on <a href="https://unsplash.com/photos/zJR-P9dIGu8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home