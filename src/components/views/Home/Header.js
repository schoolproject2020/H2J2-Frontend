import React, {Component} from "react";
import "./Header.css";
import cookie from 'react-cookies'
import Logout from "../Login/Logout";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: cookie.load('level'),
            login: cookie.load('login')
        }
    }

    render() {
        return (
            <div>
                <button type="button" className="mobile-nav-toggle d-lg-none">
                </button>
                <div id="head-util">
                        <ul id="login">
                            {this.state.level !=="3" ? <a href="/mypage">마이페이지</a>:
                                <a href="/detail">고객관리</a>}&nbsp;&nbsp;|&nbsp;&nbsp;
                            {this.state.login ? <Logout/> :
                                <a href="/login">로그인</a>
                            }
                        </ul>
                </div>
                <div id="header">
                    <nav role="navigation">
                        <ul id="main-menu">
                            <h1 className="name"><a href="/">큐피트</a></h1>
                            <li><a href="/">홈</a></li>
                            <li><a href="#">운동</a>
                                <ul id="sub-menu">
                                    <li><a href="#" aria-label="subemenu">오늘운동</a></li>
                                    <li><a href="#" aria-label="subemenu">부위|가슴</a></li>
                                    <li><a href="#" aria-label="subemenu">부위|등</a></li>
                                    <li><a href="#" aria-label="subemenu">부위|어깨</a></li>
                                    <li><a href="#" aria-label="subemenu">부위|복부</a></li>
                                    <li><a href="#" aria-label="subemenu">부위|하체</a></li>
                                    <li><a href="#" aria-label="subemenu">부위|유산소</a></li>
                                </ul>
                            </li>
                            <li><a href="#">식단</a>
                                <ul id="sub-menu">
                                    <li><a href="#" aria-label="subemenu">오늘식단</a></li>
                                    <li><a href="#" aria-label="subemenu">건강</a></li>
                                </ul>
                            </li>
                            <li><a href="#">패션</a>
                                <ul id="sub-menu">
                                    <li><a href="#" aria-label="subemenu">남자</a></li>
                                    <li><a href="#" aria-label="subemenu">여자</a></li>
                                    <li><a href="#" aria-label="subemenu">운동용품</a></li>
                                </ul>
                            </li>
                            <li><a href="#">마일리지</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default (Header);