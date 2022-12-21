export default function ThemePage() {
    return(
        <>
        <div className="md:w-1/3 w-2/3 flex text-xs md:text-sm justify-center items-center m-2  md:ml-20">
            <div className="md:ml-10 w-full h-full  ">
              <div className="flex  w-full h-1/2 justify-center items-center">
                {theme1.map((item) => (
                  <ThemeBox list={item.name} />
                ))}
              </div>
              <div className="flex w-full h-1/2 justify-center items-center">
                {theme2.map((item) => (
                  <ThemeBox list={item.name} />
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-2/3 w-1/3 flex md:text-8xl text-2xl items-center justify-center ">
            <div className="text-secondary">
              <h1>Themes</h1>
            </div>
          </div>
    )
}