import { motion } from "framer-motion";

export default function BirthPage() {
  return (
    <>
      <div className="md:w-2/3 w-1/3 flex md:text-8xl text-2xl items-center justify-center ">
        <motion.div
          className="text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 },
          }}
        >
          <h1>Birth of</h1>
          <h1>Innovator</h1>
        </motion.div>
      </div>
      <motion.div
        className="md:w-1/3 w-2/3 flex text-xs md:text-sm justify-center items-center m-2 md:p-10 md:mr-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto a
          fuga quidem similique corrupti ducimus assumenda, laborum veniam
          eveniet eaque placeat atque maxime. Id minus tempora quod.
          Exercitationem, nemo. Aspernatur, deleniti laborum saepe rem non quos
          necessitatibus similique voluptas voluptatibus iusto vero ducimus
          provident suscipit fuga ratione veritatis doloremque quasi inventore
          sit. Ratione, praesentium odio? Molestiae tempora vel voluptates.
          Error delectus quod eum ut?{" "}
        </p>
      </motion.div>
    </>
  );
}
