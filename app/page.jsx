    import LikeButton from './like-button';
    
    function NameAndTitle(){
        return (
            <div>
                <h1>James Campbell</h1>
                <span>Software Engineer</span>
            </div>
        );
    }

    export default function HomePage(){
        return (
            <div>
                <NameAndTitle />
                <div id="hero-container">
                    <p>I love solving coding puzzles and building elegant interactive experiences.</p>
                </div>
                <LikeButton />
            </div>
        );
    }
     
  