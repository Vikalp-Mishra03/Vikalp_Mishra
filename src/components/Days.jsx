import React from 'react'
import GitHubCalendar from 'react-github-calendar'

export default function Days() {
    return (
        <div className='days'>
            <div className='heading'>
                <h2>DAYS I CODE</h2>
                <GitHubCalendar
                    username="Vikalp-Mishra03"
                    blockSize={15}
                    blockMargin={5}
                    // color="#c084f5"
                    fontSize={16}
                />
            </div>
        </div>
    )
}
