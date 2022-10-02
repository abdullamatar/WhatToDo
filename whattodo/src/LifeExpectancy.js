import React from 'react'

// ? this is a component I believe
// export default function imReallyJustRushingThis(props){
//     var a = document.getElementById("age").value;
//     var e = document.getElementById("expected").value;
//     var daysLeft = 0;
//     a *= 365; e*=365;
//     daysLeft = e-a;
//     document.getElementById("output").innerHTML = `Fortunately you've got around ${daysLeft} days left, what are you gonna do next?`;
//     return <li>{props.title} </li>
// }



export default function LifeExpectancy() {
  return (
    <div>
            {/* <h1>Bismillah</h1> */}
            <section id="nav">
            <nav id="ie4">
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <a id="links" class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <p id="title">⌛Change is the only constant⏳</p>
                    </li>
                    <li class="nav-item">
                        <a id="links" class="nav-link"
                            href="https://twitter.com/lexfridman/status/1086278041972531202?lang=en"
                            target="blank">foo</a>
                    </li>
                </ul>
            </nav>
        </section>

        <section id="maneContent">
            <section id="siteDescript">
                <div id="intro" class="flex-grid">
                    <div class="col">
                        <p id="wlcm">
                            <strong>1.</strong>
                            Hello, my name is Abdulla; Today I decided to test out how fast I
                            would be able to create this idea I had... <br />
                            I hope to further develop this website and allocate <strong>time</strong> whenever possible.
                            <br />
                        </p>
                    </div>
                    <div class="col">
                        <p id="filler">
                            <strong>2.</strong>
                            Below you will be asked how many years you've been alive for,
                            followed by how long you think you'll live. It will then show you
                            how many days you've got left.
                        </p>
                    </div>
                    <div class="col">
                        <p>
                            <strong>3.</strong>
                            I hope whoever happens to visit this site is able to gain some
                            sort of insight or perspective on what they are
                            currently doing and what they will be doing next... <br />
                            Finally, this is only an initial and rushed commit not intended to
                            be taken seriously and will be updated in the near future, thank
                            you.
                        </p>
                    </div>
                </div>
            </section>
        </section>

        <section id="revealer">
            <div id="flex-grid-thirds">
                <span> Please use years, for now... </span>
                <div class="col">
                    <span>How many times have 365 days passed by you?</span><input id="age" type="number" />
                </div>
                <div class="col">
                    <span>How many years do you think you have left?</span>
                    <input id="expected" type="number" />
                    <button onclick="imReallyJustRushingThis()" id="sbmt">
                        Gain a sense of time left (⊙_⊙)？(I have broken this button and will fix it, thank you.)
                    </button>
                </div>
                <div id="output" class="col"></div>
            </div>
        </section>

        <footer>
            <span id="pictureRef">
                <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Background
                    img credits: NASA</a>
                on
                <a
                    href="https://unsplash.com/s/photos/time-is-of-the-essence?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </span>

        </footer>
          <script>
              {/* function imReallyJustRushingThis(props){
                let a = document.getElementById("age").value;
                var e = document.getElementById("expected").value;
                var daysLeft = 0;
                a *= 365; e*=365;
                daysLeft = e-a;
                document.getElementById("output").innerHTML = `Fortunately you've got around ${daysLeft} days left, what are you gonna do next?`;
                return <li>{props.title} </li>
              } */}
        </script>
    </div>
  )
}
