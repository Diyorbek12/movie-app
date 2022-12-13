export default function Movie (props) {
    const {Title, Year, imdbID, Type, Poster} = props;
    return (
        <div className="row">
    <div className="col s10 m11">
      <div className="card">
        <div className="card-image">
          <img src={Poster} />
          <span className='card-title'></span>
        </div>
        <div className="card-content">
          <p>{Title} <br /> year: {Year}</p>
        </div>
        <div className="card-action">
          {Type} ID: {imdbID}
        </div>
      </div>
    </div>
  </div>
    )
}