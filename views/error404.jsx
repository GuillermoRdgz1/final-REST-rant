const React = require('react')
const Def = require('./default')


function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img id="error" src="/images/404.jpg" alt="404 Error" />
                <div>
                Photo by <a href="https://unsplash.com/@villxsmil?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luis Villasmil</a> on <a href="https://unsplash.com/images/feelings/funny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404