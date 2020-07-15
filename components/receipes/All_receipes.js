const All_receipes = (props) => {
  
  let url="http://localhost:3000/receipes/";
  let cards = [];
  for (let i = 0; i<props.data.length; i++){
    cards.push(
        <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-3">
          <div className="meal-card card mx-auto">
            <img className="meal-img card-img-top d-block mx-auto m-2" src={props.data[i].img_src_1 } alt="breakfast"/>
            <div className="card-body">
              <h5 className="card-title">{props.data[i].title}</h5>
              <a href={url+props.data[i].id} className="btn btn-primary">Learn to cook it</a>
            </div>
          </div>
        </div>
    )
  }


  return (
    <div className="container mb-3" id="all-meals">
      <div className="row justify-content-start">
        <div className="col-12 text-center mb-5">
          <h2>All of our receipes</h2>
        </div>
        {cards}
      </div>
    </div>
)}

export default All_receipes;
