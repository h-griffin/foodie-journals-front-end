import Layout from '../components/layout/Layout';
import Filter from '../components/recipes/Filter';
import All_recipes from '../components/recipes/All_recipes';
// import url_back from '../components/url_back';
import RenderedFormRecipes from '../components/recipe-rendered/recipe-rendered'

const Recipes = (props) => {
  // for (let i = 0; i<props.length; i++)
  return (
    <Layout>
        <Filter/>
        <All_recipes data={props.data}/>
        <RenderedFormRecipes  />
    </Layout>

)}


export default Recipes;

export async function getServerSideProps (context){

  const url = require("../components/url_back");
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data : data,
    },
  }
}