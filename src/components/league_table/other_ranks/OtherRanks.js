import React from 'react'
import EachRank from './each_rank/EachRank'


const OtherRanks = ({ ranks }) =>{
   const sortedRanks = ranks && ranks.slice(3,ranks.length)


    return(
        <div className="other-ranks-container" >

            {
                sortedRanks && sortedRanks.map((rank, i) =>{
                    return(
                        <React.Fragment key={rank.id}>
                            <EachRank details={rank} position={sortedRanks.indexOf(rank)} />
                        </React.Fragment>
                    )
                })
            }

        </div>
    )
}


export default  OtherRanks