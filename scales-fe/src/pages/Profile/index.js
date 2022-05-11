import React, { useState, useEffect } from 'react';
import * as spotifyAuthService from '../../api/spotify.auth';

export default function Profile() {
    localStorage.setItem("autoLog", false);

    return (
        <>
            <h1>Profile</h1>
        </>
    )
}