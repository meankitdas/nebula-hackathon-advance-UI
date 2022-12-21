export default function SpeakerPage() {
  const theme = [{ name: "Theme 1" }, { name: "Theme 2" }, {name: "Theme 3"}, {}];

  return (
    <section
      className=" min-h-screen p-0 bg-white hidden md:block"
      id="speaker"
    >
      <div className=" h-screen ">
        <div className="flex w-full h-1/2 ">
          <div className="w-2/3 flex flex-col text-8xl items-center justify-center ">
            <div className="text-secondary">
              <h1>Birth of</h1>
              <h1>Innovator</h1>
            </div>
          </div>
          <div className="w-1/3 flex justify-center items-center p-10 mr-20">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto a fuga quidem similique corrupti ducimus assumenda,
              laborum veniam eveniet eaque placeat atque maxime. Id minus
              tempora quod. Exercitationem, nemo. Aspernatur, deleniti laborum
              saepe rem non quos necessitatibus similique voluptas voluptatibus
              iusto vero ducimus provident suscipit fuga ratione veritatis
              doloremque quasi inventore sit. Ratione, praesentium odio?
              Molestiae tempora vel voluptates. Error delectus quod eum ut?{" "}
            </p>
          </div>
        </div>
        <div className="w-full h-1/2 bg-primary"></div>
      </div>
    </section>
  );
}
