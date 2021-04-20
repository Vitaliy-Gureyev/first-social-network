import React from 'react'
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/paginator/Paginator"
import {getTotalUsersCount} from "../../redux/users-selectors";

let Users = (props) => {
    return <div>
        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
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