import monsterData from './creatures.json' assert {type: 'json'};

const colors = {
    knight: "#3636a3",
    barbarian: "#d6d636",
    sorceress: "#3bba32",
    wizard: "#6995db",
    warlock: "#373f4a",
    necromancer: "#f0f3f7",
    neutral: "#000000"
};

const landingBtn = document.querySelector('.landing-btn');
const landingContainer = document.querySelector('#landing-container');
const monsterCard = document.getElementsByClassName('monster-card');
const monsterSearch = document.querySelector('.monster-search');
const pageTitle = document.querySelector('#page-title');

landingBtn.addEventListener('click', function() {
    landingContainer.style.display = "none";
    for (let i = 0; i < monsterCard.length; i++) {
        monsterCard[i].style.display = "block";
        console.log(i)
    };
    monsterSearch.style.display = "flex";
    pageTitle.style.display = "block";
});

window.addEventListener('DOMContentLoaded', function() {
    displayMonsterCards(monsterData);
});

const monsterContainer = document.querySelector('.monster-container');
const searchInput = document.querySelector('#monster-input');

function displayMonsterCards(monsterCards) {
    let displayCards = monsterCards.map(function(monster) {
        let monsterFaction = monster.faction;
        let borderColor = colors[monsterFaction];

        for(let i = 0; i <= monsterData.length; i++) {
            return `
            <div class="monster-card" style="border: 8px solid ${borderColor};">
                <div class="monster-img">
                    <div class="img-container">
                        <img src="${monster.image}" alt="${monster.name}">
                    </div>
                    <p class="monster-id">#${monster.id}</p>
                    <h4 class="monster-name">${monster.name}</h4>
                    <p class="monster-faction">${monster.faction}</p>
                </div>

                <div class="monster-features">
                    <div class="monster-feature-names">
                        <p>Tier: </p>
                        <p>Upgraded: </p>
                        <p>Size: </p>
                        <p>Attack Type: </p>
                        <p>Movement: </p>
                        <p>Dwelling: </p>
                        <p>Unit Cost: </p>
                    </div>
                    <div class="monster-feature-values">
                        <p class="monster-tier">${monster.tier}</p>
                        <p class="monster-upgraded">${monster.upgraded}</p>
                        <p class="monster-size">${monster.size}</p>
                        <p class="monster-attack-type">${monster.attack_type}</p>
                        <p class="monster-movement">${monster.movement}</p>
                        <p class="monster-dwelling">${monster.dwelling}</p>
                        <p class="monster-cost">${monster.cost_per_unit}</p>
                    </div>
                </div>

                <div class="monster-stats">
                    <div id="monster-stats-header">
                        <h3>Stats</h3>
                    </div>
                    <div id="monster-stat-names">
                        <p>Attack: </p>
                        <p>Defense: </p>
                        <p>HP: </p>
                        <p>Damage: </p>
                        <p>Speed: </p>
                        <p>Growth: </p>
                    </div>
                    <div id="monster-stat-values">
                        <p class="monster-stat-attack">${monster.stats[0].attack}</p>
                        <p class="monster-stat-defense">${monster.stats[0].defense}</p>
                        <p class="monster-stat-hp">${monster.stats[0].hit_points}</p>
                        <p class="monster-stat-damage">${monster.stats[0].damage}</p>
                        <p class="monster-stat-speed">${monster.stats[0].speed}</p>
                        <p class="monster-stat-growth">${monster.stats[0].growth}</p>
                    </div>
                </div>
                <p class="monster-info">${monster.info}</p>
            </div>
        `;
        };
    });
    displayCards = displayCards.join('');
    monsterContainer.innerHTML = displayCards;
};

searchInput.addEventListener('input', function(e) {
    // const monsterId = document.querySelectorAll('.monster-id');
    const monsterNames = document.querySelectorAll('.monster-name');
    // const monsterFaction = document.querySelectorAll('.monster-faction');
    // const monsterTier = document.querySelectorAll('.monster-tier');
    // const monsterUpgraded = document.querySelectorAll('.monster-upgraded');
    // const monsterSize = document.querySelectorAll('.monster-size');
    // const monsterAttackType = document.querySelectorAll('.monster-attack-type');
    // const monsterMovement = document.querySelectorAll('.monster-movement');
    // const monsterSpeed = document.querySelectorAll('.monster-stat-speed');
    
    const search = searchInput.value.toLowerCase();
    
    // monsterId.forEach(monsterName => {
    //     monsterName.parentElement.parentElement.style.display = "block";
    //     if(!monsterName.innerHTML.toLowerCase().includes(search)) {
    //         monsterName.parentElement.parentElement.style.display = "none";
    //     };
    // });
    
    monsterNames.forEach(monsterName => {
        monsterName.parentElement.parentElement.style.display = "block";
        if(!monsterName.innerHTML.toLowerCase().includes(search)) {
            monsterName.parentElement.parentElement.style.display = "none";
        };
    });

});

// function filterMonster(e) {
//     const search = searchInput.value.toLowerCase();
//     e.forEach(monsterName => {
//         monsterName.parentElement.parentElement.style.display = "block";
//         if(!monsterName.innerHTML.toLowerCase().includes(search)) {
//             monsterName.parentElement.parentElement.style.display = "none";
//         };
//     });
// };