import React from 'react'
import Header from './Header'

const Hero = (props) => {
    console.log("nnnnn", props)
    if (props.theme == 'primary')
        return (

            <div className='flex flex-col  justify-center bg-cover  bg-no-repeat px-4 py-10 lg:py-40'
                style={{
                    backgroundImage: 'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAgIBwgHBwcICA0HBwcHBw8ICQcKFREWFhURExMYHSggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDjcZFRkrKzctKysrKys3Kys3KzctKysrKysrKysrKysrLSsrKysrKysrKystKysrKysrKysrK//AABEIAJEBWwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAgEDBAb/xAAYEAEBAQEBAAAAAAAAAAAAAAAAAQIREv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APkgHVgAAZWgMTVAIqbF2MRXOxNjpYmxFc7GWOlibEVz4yxdiajSKyqqagwZazorenU9Z1BfW9c+t6o6SqlcpVyqzXbNXmuWa6ZrTNdYqIyuKiyMjVRoAAAAAAAMAAABoAAAAAMGgMTYoRUJsdLE8BFibHSxNiLrnYmuliKK51zrppz0i6m1FrdVztQ1VrOotZ0XXTpK59bKI6yrzXGV0zVHbNdc1wzXbKs12yuOeXTKouNTFKjQAAAAAAAYAAADQAAAAAAaDGKYDGcUwE2JsdE1Fc7HPTrY56QcdOWnbUctCuOkV0056FRaxtYgNjFQVUXlEXkHXLtlxy65Vl2y6Ryy65VFxSYoQayNUAAAAAAYAAADQAAAAAI1jQAAYNYDGVTAc6jTpUaRXHUcdR6NRy1EHn1HOx31EWDTjYzjpw8ornxsi+N4gmR0kZIqQF5dMojplUdMukc8umVZq4tEVFRsaxqgAAAAwAAAAAaAAAAAA1gDQAAAYytYCajS6iornpz1HXTnUI5WIsdamxGo5cOL4cZaRw4rhwVnGyN4QRUXlMVGoldMumXPLpFYq4qJioo1rGqgAADAAAAAAAaAAAAAABAaAAxrAYytTQZUWttRaisqK21FqLGVhWM1uHA6MqzjG9YA2MbFFRcRFxpmrjpHOOkVmriomKio1rGqgADAAAAAAAAaAAAAAAQIDQAZWVrAZU1tRUVNqLW6qLUIy1Fpai1Gm2s6nrOo0vp1HTrKr6zqenQX0iVRRcVlEXlqM10jpERcViriomKijWsaqDK1gAAAAAAAANAAAAAAABrAATW1lBNRpdc9IqNOel6c9IsRUWqqKjTLU2lqbUVvTqOnUHTrZXPrZRXSVcc4vKo6ZdMueXTKpXTK4jLpFYqoqJi1QAUAAAAAAAAAAaAAAAAAAAADGVqaCdI0uuekVGnPTppzrNajnXOulc9I0ioq9IoMZ0rICoqJioC8umUZdMgvLrlzy6ZaZrplcRl0isqikxSoAAAAAAAAAAAA0AAAAAAAAAGJoAmudaIsc9OdBmtRzrnpojTnpFYAysjQGxWQB0jpkFR0y65YKldcrgKypQKgAAAAAAAAAAAD/9k=")',
                    height: "300px", backgroundRepeat: "no-repeat"
                }}>
                <div className='max-w-screen-lg' style={{marginLeft: '5%'}}>
                    <Header {...props.header} />
                    <button className='py-3 bg-[#5E63F1] text-white lg:py-4 px-12 lg:px-16 text-white-500 font-medium rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none undefined'>
                        Get Started
                    </button>
                </div>
            </div>

        )
    else if (props.theme == 'secondary')
        return (

            
            <div className='grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16'>
          <div className='flex flex-col justify-center items-start row-start-2 sm:row-start-1'>
            <h1 className='text-3xl px-1 font-bold leading-normal mb-8 pt-6 pb-3 text-left font-inter tracking-widest !p-0 !text-3xl md:!text-4xl'>
            {props.header.title}
            </h1>
            <p className='mt-4 mb-6 text-slate-500'>
            {props.header.label}
            </p>
            <button className='py-3 bg-[#5E63F1] text-white lg:py-4 px-12 lg:px-16 text-white-500 font-medium rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none undefined'>
            {props.button.label}
            </button>
          </div>
          <div className='flex w-full'>
            <div className='h-full w-full'>
              <div style={{ display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ display: 'block', boxSizing: 'border-box' }}>
                  <img className="object-cover object-center rounded" alt="hero" src={props.media.data[0].attributes.url}  />
                </div>
              </div>
            </div>
          </div>
        </div>
        )
}

export default Hero