"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { A, blogCategories, blogPosts, type BlogPost } from "./data";

const ALL = "Všetko";
const READ = "5 min. čítania";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

function Author({ name }: { name: string }) {
  return (
    <span className="lc-post__author">
      <span className={`lc-post__avatar${name.startsWith("Monika") ? " is-teal" : ""}`} aria-hidden="true">
        {initials(name)}
      </span>
      {name}
    </span>
  );
}

export function BlogList() {
  const [cat, setCat] = useState(ALL);
  const posts = useMemo(() => (cat === ALL ? blogPosts : blogPosts.filter((p) => p.categories.includes(cat))), [cat]);
  const [featured, ...rest] = posts;

  return (
    <section className="lc-blog" aria-label="Články">
      <div className="lc-wrap">
        <div className="lc-blog__filters" role="group" aria-label="Filtrovať podľa kategórie" data-rv>
          {[ALL, ...blogCategories].map((c) => {
            const count = c === ALL ? blogPosts.length : blogPosts.filter((p) => p.categories.includes(c)).length;
            return (
              <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}>
                {c}
                <span>{count}</span>
              </button>
            );
          })}
        </div>

        {featured && <FeaturedPost post={featured} key={featured.href} />}

        {/* Framer Motion layout animation: filtering reflows the grid smoothly, cards fade/scale in and out. */}
        <ul className="lc-blog__grid" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            {rest.map((p, i) => (
              <motion.li
                key={p.href}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 180, damping: 24, delay: (i % 3) * 0.06 }}
              >
                <PostCard post={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <motion.a
      href={post.href}
      className="lc-feat"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 140, damping: 22 }}
    >
      <span className="lc-feat__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={A(post.image)} alt="" />
        <span className="lc-tag lc-tag--red">Najnovší článok</span>
      </span>
      <span className="lc-feat__body">
        <span className="lc-post__meta">
          <span className="lc-tag lc-tag--teal">{post.categories[0]}</span>
          <span>
            {post.date} · {READ}
          </span>
        </span>
        <strong className="lc-feat__title">{post.title}</strong>
        <span className="lc-feat__excerpt">{post.excerpt}</span>
        <span className="lc-feat__foot">
          <Author name={post.author} />
          <span className="lc-work__cta">
            Čítať článok <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </span>
      </span>
    </motion.a>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <a href={post.href} className="lc-post">
      <span className="lc-post__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={A(post.image)} alt="" loading="lazy" />
        <span className="lc-post__arrow" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </span>
      <span className="lc-post__meta">
        <span className="lc-tag lc-tag--soft">{post.categories[0]}</span>
        <span>{post.date}</span>
      </span>
      <strong className="lc-post__title">{post.title}</strong>
      <span className="lc-post__excerpt">{post.excerpt}</span>
      <Author name={post.author} />
    </a>
  );
}

export function BlogHeroAside() {
  const covers = [blogPosts[3], blogPosts[4], blogPosts[0]];
  return (
    <div className="lc-hero__stack lc-phero__stack" data-rv style={{ ["--d" as string]: "200ms" }} aria-hidden="true">
      {covers.map((p, i) => (
        <span key={p.href} className={`lc-hero__card lc-hero__card--${i} lc-hero__card--cover`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A(p.image)} alt="" />
          {i === 2 && (
            <span className="lc-hero__caption">
              <span>
                <strong>Najnovšie</strong>
                <small>{p.date}</small>
              </span>
              <span className="lc-tag lc-tag--teal">Blog</span>
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
