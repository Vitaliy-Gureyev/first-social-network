import React from 'react'
import styles from "./users.module.css";
import {NavLink, Redirect} from "react-router-dom";
import * as axios from "axios";
import {toggleIsFollowingProgress} from "../../redux/users-reducer";
import {userAPI} from "../../api/Api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
                         onClick={(e) => {
                             props.onPageChanged(p);
                         }}>{p}</span>
        })}

        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : "https://i.ibb.co/km2ndtc/standart-User.jpg"}
                         className={styles.userPhoto} alt=""/>
                         </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unfollow(u.id)
                                  }}> Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}> Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                     <div>{u.status}</div>
                </span>
                <span>
                    <div>
                        {"u.location.country"}
                     </div>
                    <div>
                        {"u.location.city"}
                    </div>
                </span>
            </span>
        </div>)}
    </div>
}
export default Users;