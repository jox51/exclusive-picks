import React from "react"

const Footer = () => {
  const d = new Date()
  return (
    <section>
      <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © {`${d.getFullYear()}`} Copyright:
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://github.com/jox51"
            target="_blank"
          >
            {" "}
            Jox51 Enterprises
          </a>
        </div>
      </footer>
    </section>
  )
}

export default Footer
