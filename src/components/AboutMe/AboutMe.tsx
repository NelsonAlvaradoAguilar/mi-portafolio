

// Define the structure of the data
type AboutMeData=  {
  id?: string;
  image?: string;
  name?: string;
  paragraph1?: string;
  paragraph2?: string;
}

// Define the props for the component (assuming the data is passed as props)
type AboutMeProps ={
  aboutMeData: AboutMeData[];
}

import "./AboutMe.scss"

function AboutMe({ aboutMeData }: AboutMeProps) {
    return (
      <section className="bio" id="about">
        {aboutMeData?.map((data) => (
          <div className="bio__container" key={data.id}>
            <div className="bio__subcontainer">
              <img className="bio__image" src={data.image} alt={data.name} />
              <h1 className="bio__name">{data.name}</h1>
            </div>
            <article className="bio__article">
              <p className="bio__paragraph">{data.paragraph1}</p>
              <p className="bio__paragraph bio__paragraph--bottom">
                {data.paragraph2}
              </p>
            </article>
          </div>
        ))}
      </section>
    );
  
  }
export default AboutMe;