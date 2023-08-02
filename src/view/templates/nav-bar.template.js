export const navBarTemplate = (data) => /*html*/ `
    <div class="nav-bar">
        <div class="nav-bar__logo">
            <img src="${data.logo}" alt="logo">
        </div>
        <div class="nav-bar__search">
            <input type="text" placeholder="Search">
        </div>
        <div class="nav-bar__menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Recipes</a></li>
            </ul>
        </div>
    </div>
        `;
