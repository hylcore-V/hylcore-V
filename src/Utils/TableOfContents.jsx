import { useEffect, useState, useCallback } from 'react';

function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const generateId = (text, index) => `heading-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`;

    const h2Tags = Array.from(content.current.querySelectorAll('h2'));
    const headingList = h2Tags.map((heading, idx) => {
      const id = generateId(heading.innerText, idx);
      heading.id = id; // Assign ID directly to the element
      return {
        id: id,
        text: heading.innerText,
        offset: heading.offsetTop
      };
    });
    setHeadings(headingList);

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const found = headingList.find((heading, idx) => {
        const nextHeading = headingList[idx + 1];
        const start = heading.offset;
        const end = nextHeading ? nextHeading.offset : document.body.scrollHeight;
        return scrollPosition >= start && scrollPosition < end;
      });
      if (found) {
        setActiveId(found.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [content]); // Dependency array includes content to re-apply effect if content changes

  const handleClick = (e, id) => {
    e.preventDefault();
    const headerOffset = 80; // Adjust this if you have a fixed header or other elements
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const top = window.scrollY + targetElement.getBoundingClientRect().top - headerOffset;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
      setActiveId(id); // Set active ID immediately upon click
    }
  };

  return (
    <div className="table-of-contents">
      <ol>
        {headings.map((heading, idx) => (
          <li key={idx} className={heading.id === activeId ? 'active' : ''}>
            <a href={`#${heading.id}`} onClick={(e) => handleClick(e, heading.id)}>{heading.text}</a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TableOfContents;
