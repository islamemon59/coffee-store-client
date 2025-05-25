/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { FiCoffee } from "react-icons/fi";
import Banner from "../Component/Banner";
import { motion, spring } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";

const Home = () => {
  // const initialCoffees = useLoaderData();

  const {isPending, data:coffees, refetch} = useQuery({
    queryKey: ['coffees'],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/coffees");
      return res.json()
    }
  })
  //   console.log(data);
  // const [remainingCoffee, setRemainingCoffee ] = useState(data);
  // console.log(remainingCoffee);
// 

  if(isPending){
    return <Loading></Loading>
  }


  return (
    <div>
      <Banner></Banner>
      <div className="bg-base-200 overflow-hidden">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-12 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="space-y-3 overflow-hidden"
          >
            <img src="icons/1.png" alt="icon-1" />
            <h2 className="text-4xl rancho text-primary">Awesome Aroma</h2>
            <p className="text-secondary">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              duration: 1,
            }}
            className="space-y-3 overflow-hidden"
          >
            <img src="icons/2.png" alt="icon-2" />
            <h2 className="text-4xl rancho text-primary">High Quality</h2>
            <p className="text-secondary">
              We served the coffee to you maintaining the best quality
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="space-y-3 overflow-hidden"
          >
            <img src="icons/3.png" alt="icon-3" />
            <h2 className="text-4xl rancho text-primary">Pure Grades</h2>
            <p className="text-secondary">
              The coffee is made of the green coffee beans which you will love
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              x: { type: spring, stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
              duration: 1,
            }}
            className="space-y-3 overflow-hidden"
          >
            <img src="icons/4.png" alt="icon-4" />
            <h2 className="text-4xl rancho text-primary">Proper Roasting</h2>
            <p className="text-secondary">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-[url(more/1.png)] bg-no-repeat my-20 overflow-hidden">
        <div className="flex flex-col justify-center items-center py-10 ">
          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              x: { type: spring, stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-center overflow-hidden"
          >
            --- Slip & Savor ---
          </motion.h3>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: spring, stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-[55px] rancho text-center text-primary overflow-hidden"
          >
            Our Popular Products
          </motion.h1>
          <Link to="/addCoffee">
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                y: { type: spring, stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              onClick={() => {
                scrollTo(0, 0);
              }}
              className="btn text-2xl bg-base-300 hover:bg-base-200 text-base-200 hover:text-primary border-2 border-primary rounded-sm rancho"
            >
              Add Coffee <FiCoffee className="text-primary" />
            </motion.button>
          </Link>
        </div>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: spring, stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          {coffees?.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
            //  remainingCoffee={remainingCoffee}
             refetch={refetch}
              // setCoffees={setCoffees}
              // setRemainingCoffee={setRemainingCoffee}
              coffee={coffee}
            ></CoffeeCard>
          ))}
        </motion.div>
        <div className="mt-20 overflow-hidden">
          <div className="text-center py-6 overflow-hidden">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: spring, stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className="
            text-accent overflow-hidden"
            >
              Follow Us Now
            </motion.p>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: spring, stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className="text-[55px] text-primary rancho overflow-hidden"
            >
              Follow on Instagram
            </motion.h1>
          </div>

          <section className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-5 max-w-6xl mx-auto justify-center overflow-hidden">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: spring, stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className="w-full object-cover overflow-hidden"
              src="cups/Rectangle 9.png"
              alt="cups"
            />
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                y: { type: spring, stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className="w-full object-cover overflow-hidden"
              src="cups/Rectangle 10.png"
              alt="cups"
            />
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                y: { type: spring, stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className="w-full object-cover overflow-hidden"
              src="cups/Rectangle 11.png"
              alt="cups"
            />
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: spring, stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className="w-full object-cover overflow-hidden"
              src="cups/Rectangle 12.png"
              alt="cups"
            />
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: spring, stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className="w-full object-cover overflow-hidden"
              src="cups/Rectangle 13.png"
              alt="cups"
            />
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                y: { type: spring, stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className="w-full object-cover overflow-hidden"
              src="cups/Rectangle 14.png"
              alt="cups"
            />
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                y: { type: spring, stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className="w-full object-cover overflow-hidden"
              src="cups/Rectangle 15.png"
              alt="cups"
            />
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: spring, stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className="w-full object-cover overflow-hidden"
              src="cups/Rectangle 16.png"
              alt="cups"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
