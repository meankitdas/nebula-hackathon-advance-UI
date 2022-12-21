export default function SpeakerPage() {
  const theme = [
    { name: "Theme 1" },
    { name: "Theme 2" },
    { name: "Theme 3" },
    { name: "Theme 4" },
    { name: "Theme 5" },
    { name: "Theme 6" },
  ];

  return (
    <section className=" min-h-screen p-0  bg-white  md:block" id="speaker">
      <div className=" h-screen ">
        <div className="flex w-full h-1/2 ">
          <div className="md:w-2/3 w-1/3 flex \ md:text-8xl items-center justify-center ">
            <div className="text-secondary">
              <h1>Birth of</h1>
              <h1>Innovator</h1>
            </div>
          </div>
          <div className="md:w-1/3 w-2/3 flex text-xs md:text-sm justify-center items-center md:p-10 md:mr-20">
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
