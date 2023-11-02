import backgroundImage from '/assets/gym-workout.jpg';
import './account.css';

export function AccountLayout() {
    const loginUser = function (e) {
        e.preventDefault();
    }

    const showPassword = ({ formName }) => {
        const passwordField = document.getElementById('password');
        const showBtn = document.getElementById('showBtn');
        showBtn.addEventListener('click', () => {
            passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
        });
    };
    return (
        <div className="account-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="form-container flex">
                <form onClick={loginUser}>
                    <h3>{formName}</h3>
                    <div className="form-tag-container">
                        <input type="email" name="email" autoComplete="off" placeholder="Email" />
                    </div>
                    <div className="form-tag-container">
                        <input type="password" name="password" id="password" autoComplete="off" placeholder="Password" />
                        <i className="fa-regular fa-eye" id="showBtn" onClick={showPassword}></i>
                    </div>
                    <div className="form-tag-container">
                        <button className="btn-primary">Login</button>
                    </div>
                    <hr />
                    <div className="flex" style={{ justifyContent: 'space-between' }}>
                        <button className="btn-google"> Google</button>
                        <button className="btn-facebook"> Facebook</button>
                    </div>
                </form>
            </div>
        </div>
    )
}