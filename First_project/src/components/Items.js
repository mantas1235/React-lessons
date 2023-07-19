import ShowItem from "./ShowItem";


const Items = (props)=> {
    return  <ul id="concepts">
    <ShowItem
            title={props.concept[0].title}
            image={props.concept[0].image}
            description={props.concept[0].description}
          />
          <ShowItem
            title={props.concept[1].title}
            image={props.concept[1].image}
            description={props.concept[1].description}
          />
          <ShowItem
            title={props.concept[2].title}
            image={props.concept[2].image}
            description={props.concept[2].description}
          />
        </ul>
}

export default Items