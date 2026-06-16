 const uiTranslations = {
            en: {
                appTitle: "ChemAmaze - CBSE Board Syllabus Games",
                enterBtn: "Click here to enter",
                selectSubject: "Select Subject",
                selectClass: "Select Class",
                classPrefix: "Class",
                backBtn: "← Back",
                mainBtn: "🏠 Main Page",
                mathName: "Mathematics",
                sciName: "Science",
                comingSoon: "Coming Soon! No games added yet."
            },
        };
         const gamesRepository = {
            "Science": {
                6: [
                    {   chapter:{en:"Chapter 1"},
                        topic:{en:"The Wonderful World of Science"},
                        url:{en:"https://wordwall.net/play/114428/879/247"},

                     embed_en: `
                        <iframe 
                            style="max-width:100%" 
                            src="https://wordwall.net/embed/902e5393e8284753a76091adfb504b97?themeId=65&templateId=30&fontStackId=0" 
                            width="500" 
                            height="380" 
                            frameborder="0" 
                            allowfullscreen>
                            </iframe>
                        `
                    },
                    {   chapter:{en:"Chapter 2"},
                        topic:{en:"Diversity in the Living World"},
                        url:{en:"https://wordwall.net/play/114429/214/770"},
                        embed_en:`
                            <iframe 
                            style="max-width:100%" 
                            src="https://wordwall.net/embed/bb1ba4a1fac04154885138fdcd5e72fc?themeId=66&templateId=2&fontStackId=0" 
                            width="500" 
                            height="380" 
                            frameborder="0" 
                            allowfullscreen>
                                </iframe>
                            `
                    },
                    {   chapter:{en:"Chapter 3"},
                        topic:{en:"Mindful Eating: A Path to a Healthy Body"},
                        url:{en:"https://wordwall.net/play/114428/224/363"},
                        embed_en:`
                            <iframe 
                            style="max-width:100%" 
                            src="https://wordwall.net/embed/a7887a79f77b44d1b658612e63ba5249?themeId=1&templateId=2&fontStackId=0" 
                            width="500" 
                            height="380" 
                            frameborder="0" 
                            allowfullscreen>
                                </iframe>
                              `
                    }
                ],
              7:[
                {   chapter:{en:"Chapter 1"},
                        topic:{en:"The Ever-Evolving World of Science"},
                        url:{en:"https://wordwall.net/play/114429/507/971"},
                        embed_en:`
                            <iframe 
                            style="max-width:100%" 
                            src="https://wordwall.net/embed/1b724e307b6d47e8affd6c7d0944b3af?themeId=49&templateId=5&fontStackId=0" 
                            width="500" 
                            height="380" 
                            frameborder="0" 
                            allowfullscreen>
                                </iframe>
                              `
                    },
                    {
                        chapter:{en:"Chapter 2"},
                        topic:{en:"Exploring Substances – Acidic, Basic, Neutral"},
                        url:{en:"https://wordwall.net/play/114429/730/696"},
                        embed_en:`
                            <iframe 
                            style="max-width:100%" 
                            src="https://wordwall.net/embed/a65ec73189804f928b1520d3d59d6d22?themeId=41&templateId=2&fontStackId=0" 
                            width="500" 
                            height="380" 
                            frameborder="0" 
                            allowfullscreen>
                                </iframe>
                              `
                    },{
                        chapter:{en:"Chapter 3"},
                        topic:{en:"Electricity – Circuits and Their Components"},
                        url:{en:"https://wordwall.net/play/114472/315/254"},
                        embed_en:`
                            <iframe 
                            style="max-width:100%" 
                            src="https://wordwall.net/embed/c688b560828a4d35a4558664d675e6de?themeId=50&templateId=3&fontStackId=0" 
                            width="500" 
                            height="380" 
                            frameborder="0" 
                            allowfullscreen>
                            </iframe>
                              `
                    }
                ],
                8:[
                    {
                        chapter:{en:"Chapter 1"},
                        topic:{en:"Exploring the Investigative World of Science"},
                        url:{en:"https://wordwall.net/play/114473/393/992"},
                        embed_en:`
                            <iframe 
                            style="max-width:100%" 
                            src="https://wordwall.net/embed/a147fcb315c64c1395c53d7f768ab24f?themeId=21&templateId=69&fontStackId=0" 
                            width="500" 
                            height="380" 
                            frameborder="0" 
                            allowfullscreen>
                                </iframe>
                                `
                    },{
                        chapter:{en:"Chapter 2"},
                        topic:{en:"The Invisible Living World: Beyond Our Naked Eye"},
                        url:{en:"https://wordwall.net/play/114473/150/599"},
                        embed_en:`
                            <iframe 
                            style="max-width:100%" 
                            src="https://wordwall.net/embed/063743a33e7f48099c733ebe130b9954?themeId=2&templateId=3&fontStackId=0" 
                            width="500" 
                            height="380" 
                            frameborder="0" 
                            allowfullscreen>
                                </iframe>
                              `
                    },{
                        chapter:{en:"Chapter 3"},
                        topic:{en:"Health: The Ultimate Treasure"},
                        url:{en:"https://wordwall.net/play/114473/236/438"},
                        embed_en:`
                            <iframe 
                            style="max-width:100%" 
                            src="https://wordwall.net/embed/aa9625937cb543698d66417b73351116?themeId=44&templateId=35&fontStackId=0" 
                            width="500" 
                            height="380" 
                            frameborder="0" 
                            allowfullscreen>
                                </iframe>
                              `
                    }
                ]
            },
            "Mathematics": {
                6: [
                    {
                        chapter:{en:"Chapter 1"},
                        topic:{en:"Patterns in Mathematics"},
                        url:{en:"https://wordwall.net/play/114473/547/670"},
                        embed_en:`
                           <iframe 
                           style="max-width:100%" 
                           src="https://wordwall.net/embed/c4b879abc5e640f0aea477ef90d1d3a7?themeId=21&templateId=69&fontStackId=0" 
                           width="500" 
                           height="380" 
                           frameborder="0" 
                           allowfullscreen>
                           </iframe>
                            `
                    },{
                        chapter:{en:"Chapter 2"},
                        topic:{en:"Lines and Angles"},
                        url:{en:"https://wordwall.net/play/114473/633/569"},
                        embed_en:`
                          <iframe style="max-width:100%" 
                          src="https://wordwall.net/embed/fda00015a9fe4fd8a83096b55e21315c?themeId=65&templateId=3&fontStackId=0" 
                          width="500" 
                          height="380" 
                          frameborder="0" 
                          allowfullscreen>
                          </iframe>
                            `

                    },{
                        chapter:{en:"Chapter 3"},
                        topic:{en:"Number Play"},
                        url:{en:"https://wordwall.net/play/114473/753/174"},
                        embed_en:`
                          <iframe style="max-width:100%" 
                          src="https://wordwall.net/embed/518775fb815541feb6c08c7cd7f87fb5?themeId=22&templateId=45&fontStackId=0" 
                          width="500" 
                          height="380" 
                          frameborder="0" 
                          allowfullscreen>
                          </iframe>
                            `
                    }
                ],
                7:[
                    {
                       chapter:{en:"Chapter 1"},
                        topic:{en:"Large Numbers Around Us"},
                        url:{en:"https://wordwall.net/play/114473/885/276"},
                        embed_en:`
                          <iframe style="max-width:100%" 
                          src="https://wordwall.net/embed/cb244e39b55444e3b0635dba24b0596f?themeId=21&templateId=69&fontStackId=0" 
                          width="500" 
                          height="380" 
                          frameborder="0" 
                          allowfullscreen>
                          </iframe>
                            ` 
                    },{
                         chapter:{en:"Chapter 2"},
                        topic:{en:"Arithmetic Expressions"},
                        url:{en:"https://wordwall.net/play/114473/947/306"},
                        embed_en:`
                          <iframe style="max-width:100%" 
                          src="https://wordwall.net/embed/c52e2809f15c48bb8317f7ea858b240a?themeId=1&templateId=5&fontStackId=0" 
                          width="500" 
                          height="380" 
                          frameborder="0" 
                          allowfullscreen>
                          </iframe>
                          `
                    },{
                        chapter:{en:"Chapter 3"},
                        topic:{en:"A Peek Beyond the Point"},
                        url:{en:"https://wordwall.net/play/114474/046/211"},
                        embed_en:`
                          <iframe style="max-width:100%" 
                          src="https://wordwall.net/embed/61237658fb634e26a03445952f1628cc?themeId=65&templateId=2&fontStackId=0" 
                          width="500" 
                          height="380" 
                          frameborder="0" 
                          allowfullscreen></iframe>
                          `
                    }
                ],
                8:[
                    {
                      chapter:{en:"Chapter 1"},
                        topic:{en:"A Square and A Cube"},
                        url:{en:"https://wordwall.net/play/114474/116/438"},
                        embed_en:`
                          <iframe style="max-width:100%" 
                          src="https://wordwall.net/embed/bb5b2014f3524208bc6ec847059e41fe?themeId=46&templateId=3&fontStackId=0" 
                          width="500" 
                          height="380" 
                          frameborder="0" 
                          allowfullscreen>
                          </iframe>
                          `  
                    },{
                        chapter:{en:"Chapter 2"},
                        topic:{en:"Power Play"},
                        url:{en:"https://wordwall.net/play/114474/183/748"},
                        embed_en:`
                          <iframe style="max-width:100%" 
                          src="https://wordwall.net/embed/ea379b0b67ba413ba67fb49a870f2d5e?themeId=1&templateId=5&fontStackId=0" 
                          width="500" 
                          height="380" 
                          frameborder="0" 
                          allowfullscreen>
                          </iframe>
                          `
                    },{
                        chapter:{en:"Chapter 3"},
                        topic:{en:"A Story of Numbers"},
                        url:{en:"https://wordwall.net/play/114477/219/163"},
                        embed_en:`
                          <iframe style="max-width:100%" 
                          src="https://wordwall.net/embed/432d54fa98e84cbebb3489d62f5d9ea4?themeId=42&templateId=11&fontStackId=0" 
                          width="500" 
                          height="380" 
                          frameborder="0" 
                          allowfullscreen>
                          </iframe>
                          `
                    }
                ]
            }
            };
       
        let currentScreen = 'home';
        let currentLang = 'en';
        let selectedSubject = null;
        let selectedClass = null;
        let currentGame = null;

        function setLanguage(langCode) {
            currentLang = langCode;
            
            document.querySelectorAll('.lang-toggle-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(`lang-${langCode}`).classList.add('active');
            
            if(langCode === 'ta') {
                document.querySelectorAll('.en-inline').forEach(e => e.style.display = 'none');
                document.querySelectorAll('.ta-inline').forEach(e => e.style.display = 'inline');
            } else {
                document.querySelectorAll('.en-inline').forEach(e => e.style.display = 'inline');
                document.querySelectorAll('.ta-inline').forEach(e => e.style.display = 'none');
            }

            const dict = uiTranslations[langCode];
            document.getElementById('txt-app-title').innerText = dict.appTitle;
            document.getElementById('txt-enter-btn').innerText = dict.enterBtn;
            document.getElementById('txt-select-subject').innerText = dict.selectSubject;
            document.getElementById('btn-back').innerText = dict.backBtn;
            document.getElementById('btn-main').innerText = dict.mainBtn;
            
            document.querySelectorAll('.txt-class-prefix').forEach(span => {
                span.innerText = dict.classPrefix;
            });

            if (selectedSubject) {
                const subjectLabel = selectedSubject === 'Mathematics' ? dict.mathName : dict.sciName;
                document.getElementById('grade-screen-title').innerText = `${subjectLabel} - ${dict.selectClass}`;
            }
            if (selectedClass) {
                loadGames(selectedClass); 
            }
        }

        function navigateTo(screenName) {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            document.getElementById(`screen-${screenName}`).classList.add('active');
            
            const navBar = document.getElementById('navigation-bar');
            const wrapper = document.getElementById('app-container-wrapper');
            const bodyEl = document.body;

            navBar.style.display = (screenName === 'home') ? 'none' : 'flex';
            
            if (screenName === 'home') {
                wrapper.classList.add('home-active');
                bodyEl.className = "theme-home";
                wrapper.style.pointerEvents = "none"; 
            } else {
                wrapper.classList.remove('home-active');
                bodyEl.className = "theme-inner";
                wrapper.style.pointerEvents = "auto";
            }

            currentScreen = screenName;
        }

        function selectSubject(subjectName) {
            selectedSubject = subjectName;
            const dict = uiTranslations[currentLang];
            const subjectLabel = subjectName === 'Mathematics' ? dict.mathName : dict.sciName;
            
            document.getElementById('grade-screen-title').innerText = `${subjectLabel} - ${dict.selectClass}`;
            selectedClass = null; 
            navigateTo('grades');
        }
        function openGame(game) {
            currentGame = game;
            document.getElementById('player-title').innerText =
            `${game.chapter[currentLang]} - ${game.topic[currentLang]}`;

            document.getElementById('game-player-container').innerHTML =
            currentLang === 'ta'
                ? game.embed_ta
                : game.embed_en;
            navigateTo('player');
        }

        function loadGames(classId) {
            selectedClass = classId;
            const container = document.getElementById('games-list-container');
            const title = document.getElementById('selected-class-title');
            const dict = uiTranslations[currentLang];
            
            const subjectLabel = selectedSubject === 'Mathematics' ? dict.mathName : dict.sciName;
            title.innerText = `${subjectLabel} : ${dict.classPrefix} ${classId}`;
            container.innerHTML = ''; 

            const games = gamesRepository[selectedSubject]?.[classId] || [];

            if(games.length > 0) {
                games.forEach(game => {
                   if (
                        (currentLang === 'ta' && game.embed_ta) ||
                        (currentLang === 'en' && game.embed_en)
                    )
                    {
                    const gameCard = document.createElement('a');

                    gameCard.href = "#";
                    gameCard.className = "item-link game-link";

                    gameCard.innerHTML = `
                    <div class="chapter-title">${game.chapter[currentLang]}</div>
                    <div>${game.topic[currentLang]}</div>

                    <div style="
                    margin-top:10px;
                    color:#21A0D2;
                    font-size:0.9rem;
                    font-weight:bold;">
                    ▶ Play Game
                    </div>
                    `;

                    gameCard.onclick = function(e) {
                    e.preventDefault();
                    openGame(game);
                    };

                    container.appendChild(gameCard);
                    }
                });
                    } else {
                    container.innerHTML = `<p style="color: #666; padding: 20px;">${dict.comingSoon}</p>`;
                    }

            navigateTo('games');
        }

        function goBack() {
            if (currentScreen === 'player') {
                navigateTo('games');
            }

            else if (currentScreen === 'games') {
                selectedClass = null;
                navigateTo('grades');
            }

            else if (currentScreen === 'grades') {
                selectedSubject = null;
                navigateTo('subjects');
            }

            else if (currentScreen === 'subjects') {
                navigateTo('home');
            }
        }

        function goMain() {
            selectedSubject = null;
            selectedClass = null;
            navigateTo('home');
        }
        
        setLanguage('en');