"use client";
import { blogs } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const BlogsPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-6"
    >
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h1 className="h2 mb-4">
            My <span className="text-accent">Blog</span> Articles
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            I write about web development, backend systems, and emerging technologies. 
            Here are some of my recent articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 2.4 + index * 0.1, duration: 0.4 },
              }}
              className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <Link
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Cover Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={blog.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-3 mb-4">
                    {blog.description}
                  </p>

                  {/* Read More Button */}
                  <div className="flex items-center gap-2 text-accent font-medium text-sm">
                    <span>Read Article</span>
                    <BsArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogsPage;
