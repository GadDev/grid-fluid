import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';



function Story({ story }) {
    const [isExpand, setIsExpand] = useState(false);
    const { id, gridColumnStart, gridRowStart, url, title } = story;

    const styleExpand = {
        gridColumnStart: `${gridColumnStart}`,
        gridColumnEnd: `${gridColumnStart + 2}`,
        gridRowStart: `${gridRowStart}`,
        gridRowEnd: `${gridRowStart + 2}`
    }
    function expandCell(){
        console.log('click')
        setIsExpand(!isExpand);
    }

    return (
        <li onClick={expandCell} key={id} className={`column-start-${gridColumnStart} row-start-${gridRowStart}`} style={isExpand ? styleExpand : {}}>
            <a href={url}>{title}</a>
        </li>
    );
}

function HackerStoryTiles({ stories }) {
    if (stories.length === 0) {
        return <div>Loading stories...</div>;
    }

    return (
        <div className="story-list__wrapper">
            <h1>HackerNews Top 500 stories</h1>
            <ul>
                {stories.map(story => {

                    return (
                        <Story key={story.id} story={story} />
                    )
                    
                })}
            </ul>
        </div>
    );
}



function App() {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        async function getTopStories() {
          const url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
          try {
            const response = await fetch(url);
            if (response.ok === false) {
              throw new Error("Response Error:" + response.text);
            }
            const json = await response.json();
            const promises = json
              .map(id =>
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(
                  response => response.json()
                )
              );
            const result = await Promise.all(promises);
            let gridRowStart = 1;
            let counter = 0;
            const reducer = result.reduce((acc,story) => {
                
                counter += 1;
                if (counter === 9) {
                    gridRowStart++;
                    counter = 1;
                } 
                story.gridRowStart = gridRowStart;
                story.gridColumnStart = counter;
                acc.push(story)
                return acc;
            }, []);
            console.log(reducer)
            setStories(reducer);
          } catch (err) {
            console.error(err);
          }
        }
        getTopStories();
      }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    Hacker News feed
                </div>
            </header>
            <main>
                <HackerStoryTiles stories={stories} />
            </main>
        </div>
    );
}

HackerStoryTiles.propTypes = {
    stories: PropTypes.arrayOf(PropTypes.shape({}))
}

HackerStoryTiles.defaultProps = {
    stories : [{}]
}

Story.propTypes = {
    story: PropTypes.shape({
        id: PropTypes.number,
        gridColumnStart: PropTypes.number,
        gridRowStart: PropTypes.number,
        url: PropTypes.string,
        title: PropTypes.string
    }).isRequired
}

export default App;
