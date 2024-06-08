import { Hono } from "hono";
import { renderer } from "./renderer";
import { html } from "hono/html";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.html(html`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />

    <!-- Read and update content attributes accordingly  -->

    <meta
      name="description"
      content="Welcome to my portfolio website. I am a front-end web developer and I specialize in creating user-friendly, responsive and accessible websites. Explore my projects, open-source work and contact me for any inquiries or collaborations."
    />

    <!-- Google / Search Engine Tags -->
<meta itemprop="name" content="Naythaniel Williams | Software Engineer & UX Designer">
<meta itemprop="description" content="Welcome to my portfolio website. I am a front-end web developer and I specialize in creating user-friendly, responsive and accessible websites. Explore my projects, open-source work and contact me for any inquiries or collaborations.">

<!-- Reference screenshot of updated site's header in place of content -->
<meta itemprop="image" content="/static/logos/mobile-logo.png">

<!-- Facebook Meta Tags -->
<meta property="og:url" content="https://naythaniel.com">
<meta property="og:type" content="website">
<meta property="og:title" content="Naythaniel Williams | Software Engineer & UX Designer">
<meta property="og:description" content="Welcome to my portfolio website. I am a front-end web developer and I specialize in creating user-friendly, responsive and accessible websites. Explore my projects, open-source work and contact me for any inquiries or collaborations.">

<!-- Reference screenshot of updated site's header in content -->
<meta property="og:image" content="assets/logos/mobile-logo.png">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Naythaniel Williams | Software Engineer & UX Designer">
<meta name="twitter:description" content="Welcome to my portfolio website. I am a front-end web developer and I specialize in creating user-friendly, responsive and accessible websites. Explore my projects, open-source work and contact me for any inquiries or collaborations.">

<!-- Reference screenshot of updated site's header in content -->
<meta name="twitter:image" content="/static/logos/mobile-logo.png">


<!-- Update favicon href attribute with image of yourself -->
    <link
      rel="shortcut icon"
      href="/static/logos/mobile-logo.png"
      type="image/png"
    />

    <!-- Preloading fonts for better performance -->

    <link rel="stylesheet" href="/static/styles/index.css"  />
    <script src="/static/js/index.js" defer></script>

    <!-- Your name here -->
    <title>Naythaniel Williams's Portfolio</title>
  </head>

  <body>

    <script>
      const theme = localStorage.getItem("theme") || "dark";
      document.body.classList.add(theme);
    </script>

    <header class="header">

      <div class="menu-btn-container">
        <div class="container">
          <button type="button"  class="menu-btn">menu</button>
        </div>
      </div>

      <nav class="nav hidden">
        <ol class="nav-items">
          <li class="nav-item"><a href="#">Home</a></li>
          <li class="nav-item"><a href="#work">My Work</a></li>
          <li class="nav-item"><a href="#skills">My Skills</a></li>
          <li class="nav-item">
            <a href="#contact" data-focused="last-focused">Contact</a>
          </li>
        </ol>
      </nav>

      <div class="container">
        <div class="header-textbox">
          <!-- Replace with your name and job title -->
          <h1 class="h1">
            <span>Hi, I'm Naythaniel Williams</span>
            <span>Software Engineer</span>
          </h1>

          <!-- Add a small introductory paragraph about yourself -->
          <p class="header-text">
            A software engineer and UX designer who builds
            rich, accessible and performant web apps.
          </p>

          <div class="header-btns">
            <a href="#contact" class="btn btn-cta">Hire me</a>
            <a href="#work" class="btn btn-secondary">See my work</a>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="client">
        <div class="container">
          <h2 class="h2">Trusted by</h2>
          <div class="logos">
            <!-- Replace alt with client/company name and src attributes of images with path to relative img of client logo -->
            <div class="logo-group">
              <img
                loading="lazy"
                src="/static/images/trusted-by/stripe.svg"
                alt="Ideacraft"
                class="logo hide to-top"
              />

              <img
                loading="lazy"
                src="/static/images/trusted-by/datastax.svg"
                alt="Golden grid"
                class="logo"
              />

              <img
                loading="lazy"
                src="/static/images/trusted-by/coke.svg"
                alt="Theia"
                class="logo hide to-bottom"
              />
            </div>
            <div class="logo-group">
              <img
                loading="lazy"
                src="/static/images/trusted-by/gm.svg"
                alt="General motors"
                class="logo hide to-top"
              />

              <img
                loading="lazy"
                src="/static/images/trusted-by/shares.svg"
                alt="Chippy"
                class="logo"
              />
              <img
                loading="lazy"
                src="/static/images/trusted-by/shopify.svg"
                alt="Shopify"
                class="logo hide to-bottom"
              />
            </div>
            <div class="logo-group">
              <img
                loading="lazy"
                src="/static/images/trusted-by/agency-elevation.svg"
                alt="Agency elevation"
                class="logo hide to-top"
              /><img
                loading="lazy"
                src="/static/images/trusted-by/gitlab.svg"
                alt="Ron jones"
                class="logo"
              /><img
                loading="lazy"
                src="/static/images/trusted-by/duolingo.svg"
                alt="Mighty furniture's"
                class="logo hide to-bottom"
              />
            </div>
            <div class="logo-group">
              <img
                loading="lazy"
                src="/static/images/trusted-by/coyote.svg"
                alt="Bulls eye"
                class="logo hide to-top"
              />
              <img
                loading="lazy"
                src="/static/images/trusted-by/astrato.svg"
                alt="Chippy"
                class="logo"
              />
              <img
                loading="lazy"
                src="/static/images/trusted-by/mercado.svg"
                alt="Fastlane"
                class="logo hide to-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="work">
        <div class="container">
          <h2 class="h2" id="work">Selected Work</h2>
          <div class="work-boxes">
            <div class="work-box">
              <div class="work-textbox">
                <!-- Add your project title here -->
                <h3 class="h3">Poemonger E-Commerce</h3>
                <!-- Add small description of your project  -->
                <p class="work-text">
                  An e-commerce site for selling and marketing poetry.
                </p>
                <!-- Add technologies you used to build the project -->
                <ol class="work-technologies">
                  <li>Hono</li>
                  <li>Cloudflare Workers</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </ol>

                <div class="work-links">
                  <!-- Add url of project in href attribute -->
                  <a href="https://poemonger.com" target="_blank" rel="noopener" class="link"
                    >Explore this project</a
                  >

                  <!-- Add link to project source code in href attribute if applicable otherwise feel free to delete or comment the markup -->
                  <a
                    href="https://github.com/aretheregods"
                    target="_blank"
                    rel="noopener"
                    title="Source code"
                  >
                    &#128279;
                  </a>
                </div>
              </div>

         <!-- Update img src and alt attribute  -->

              <picture class="work-img">
                <img
                  loading="lazy"
                  src="/static/images/work/poemonger-read.png"
                  alt="music tech e-commerce and saas site"
                />
              </picture>
            </div>
            <div class="work-box">
              <div class="work-textbox">
                <!-- Add your project title here -->
                <h3 class="h3">songtrust.com</h3>
                <!-- Add small description of your project  -->

                <p class="work-text">Website for Songtrust.</p>
                <ol class="work-technologies">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>Django</li>
                  <li>PostgresQL</li>
                </ol>
                <div class="work-links">
                  <!-- Add url of project in href attribute -->
                  <a href="#" target="_blank" rel="noopener" class="link"
                    >Explore this site</a
                  >

                     <!-- Add link to project source code in href attribute if applicable otherwise feel free to delete or comment the markup -->
                  <a
                    href="http://songtrust.com"
                    target="_blank"
                    rel="noopener"
                    title="Source code"
                  >
                    &#128279;
                  </a>
                </div>
              </div>
         <!-- Update img src and alt attribute  -->
              <picture class="work-img">
                <img
                  loading="lazy"
                  src="/static/images/work/songtrust.png"
                  alt="contribute dev"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <!-- Update skills-img src, alt  and title attributes I have added some other logos in /static/images/skill for your convenience feel free to pick one if required  -->

      <section class="skills">
        <div class="container">
          <h2 class="h2" id="skills">My Toolkit</h2>
          <div class="skills-imgs">
                <img src="/static/images/skills/react.webp" alt="React" class="skills-img" loading="lazy" title="React">
                <img src="/static/images/skills/svelte.webp" alt="Svelte" class="skills-img" loading="lazy" title="Svelte">
                 <img src="/static/images/skills/typescript.webp" alt="Typescript" class="skills-img" loading="lazy" title="Typescript">
                 <img src="/static/images/skills/a11y.webp" alt="Accessibility" class="skills-img" loading="lazy" title="Web Accessibility">
                 <img src="/static/images/skills/shell.webp" alt="Shell" class="skills-img" loading="lazy" title="Shell">
                 <img src="/static/images/skills/next-js.webp" alt="NextJS" class="skills-img" loading="lazy" title="NextJS">
                 <img src="/static/images/skills/graphql.webp" alt="Graph Ql" class="skills-img" loading="lazy" title="Graph QL">
                 <img src="/static/images/skills/git.webp" alt="Git" class="skills-img" loading="lazy" title="Git">
                 <img src="/static/images/skills/html.webp" alt="CSS" class="skills-img" loading="lazy" title="CSS">
                 <img src="/static/images/skills/js.webp" alt="JavaScript" class="skills-img" loading="lazy" title="JavaScript">
            </figure>
          </div>
        </div>
      </section>

      <!-- Replace testimonials, author name, author job, img src and, alt attributes -->

      <section>
        <h2 class="h2">Testimonials</h2>
        <div class="container">
          <ol class="testimonials">
            <li class="testimonial">
              <blockquote class="testimonial-text">
                Working with Naythaniel was a great experience. His drive for clean aesthetics and his open communication style helped us collaborate closely on the solution.
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="/static/images/testimonials/rich-harris.png"
                  alt="Rich Harris"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">Harris Kareem</h3>
                  <p class="testimonial-author-job">Developer @Outlets</p>
                </figcaption>
              </figure>
            </li>
            <li class="testimonial">
              <blockquote class="testimonial-text">
                Naythaniel is a fantastic UI/UX designer and developer with a keen sense for marketing, and lead generation. He's the only designer I know who also has a deep understanding for code and front-end development.
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="/static/images/testimonials/frank-mcsherry.webp"
                  alt="Andrew Mead"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">
                   Andrew Mead
                  </h3>
                  <p class="testimonial-author-job">Chief Scientist @Logos
                  </p>
                </figcaption>
              </figure>
            </li>
            <li class="testimonial">
              <blockquote class="testimonial-text">
             
                Talented artist, experienced with various
                media and can make any project you are working on look good. He is
                easy to work with and is a self starter. I would work with Naythaniel
                again.
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="/static/images/testimonials/brian-hirsh.png"
                  alt="Brian Hirsh"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">Brian Hirsh</h3>
                  <p class="testimonial-author-job">Head @Zero-in</p>
                </figcaption>
              </figure>
            </li>
            <li class="testimonial">
              <blockquote class="testimonial-text">
                Naythaniel is a true professional with amazing talent. He is a creative
                thinker, has his finger on the pulse of whats to come, and
                absolutely one of the quickest and best problem solvers I have
                ever met.
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="/static/images/testimonials/adam.png"
                  alt="Adam Argalye"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">Adam Argalye</h3>
                  <p class="testimonial-author-job">SWE @Google</p>
                </figcaption>
              </figure>
            </li>
            <li class="testimonial">
              <blockquote class="testimonial-text">
               Naythaniel is one of my favourite people to work with. He's my go-to colleague when trouble shooting any new technique or technology because she understands how to tackle unknown problems with gumption. 
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="/static/images/testimonials/val-head.png"
                  alt="Val Head"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">Val Head</h3>
                  <p class="testimonial-author-job">CEO @Engines</p>
                </figcaption>
              </figure>
            </li>
            <li class="testimonial">
              <blockquote class="testimonial-text">
                Naythaniel is a talented artist. He is very experienced with various
                media and can make any project you are working on look good. He is
                easy to work with and is a self starter. I would work with Naythaniel
                again.
              </blockquote>
              <figure class="testimonial-author">
                <img
                  src="/static/images/testimonials/tim-satterwhite.webp"
                  alt="Gary Simon"
                  loading="lazy"
                />
                <figcaption>
                  <h3 class="testimonial-author-name">Gary Simon</h3>
                  <p class="testimonial-author-job">A11y Advocate @W3C</p>
                </figcaption>
              </figure>
            </li>
          </ol>
        </div>
      </section>

      <section class="contact">
        <div class="container">
          <h2 class="h2" id="contact">Send Message</h2>
          <div class="contact-content">
            <div class="contact-textbox">
              <!-- Please comment this component if you're not available for hire -->
              <strong href="#" class="hire-alert">
                <span class="indicator"></span>
                Available for hire
              </strong>
              <p class="contact-text">
                As a software engineer, I construct web experiences and design
                systems with a special love for accessibility and the
                performance. I tend to code things from scratch and enjoy
                bringing ideas to life.
              </p>
              <p class="contact-text">
                I'm also an open-source developer, and in my spare time, I cook and draw on my tablet.
              </p>
            </div>
            <form action="#" class="contact-form" netlify>
              <div class="form-field">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div class="form-field">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  inputmode="email"
                />
              </div>
              <div class="form-field">
                <label for="message">How can I help you?</label>
                <textarea name="message" id="message" required></textarea>
              </div>
              <button type="submit" class="btn btn-cta">Send</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Update href and src attributes -->
          <nav>
            <ol class="footer-links">
              <li class="footer-link">
                <a title="GitHub" href="https://github.com/aretheregods" target="_blank" rel="noopener"
                  ><img
                    loading="lazy"
                    src="/static/images/social-links/github.svg"
                    alt="GitHub"
                /></a>
              </li>
              <li class="footer-link">
                <a title="Linkedin" href="https://www.linkedin.com/in/naythaniel-williams/" target="_blank" rel="noopener"
                  ><img
                    loading="lazy"
                    src="/static/images/social-links/linkedin.svg"
                    alt="Linkedin"
                /></a>
              </li>
            </ol>
          </nav>
          <p class="footer-text">
            &copy; <span>2024</span> - Template designed & developed by <a target="_blank" rel="noopener" href="https://github.com/aretheregods">Naythaniel Williams.</a>
          </p>
          <label class="theme-switch" for="theme-switch">
            <span>Dark Theme</span>
            <input type="checkbox" id="theme-switch" role="switch"/>
          </label>
        </div>
      </div>
    </footer>
  </body>
</html>`);
});

export default app;
