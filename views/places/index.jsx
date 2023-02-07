const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className='col-sm-4'>
          <h2>
            <a href={`/places/${index}`}>
              {place.name}
            </a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img className='w-100' src={place.pic} alt={place.name}/>
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
          <p id="thai-cred">Photo by <a href="https://unsplash.com/@shawnanggg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">shawnanggg</a> on <a href="https://unsplash.com/photos/H82HDdkcd4c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
          <p id="bake-cred">Photo by <a href="https://unsplash.com/@pinarimsi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pinar Kucuk</a> on <a href="https://unsplash.com/photos/3-PfUgbyWEs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Cravings? CHECK THESE OUT!</h1>
              <div className='row'>
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  


module.exports = index