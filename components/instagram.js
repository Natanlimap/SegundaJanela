import Instafeed from 'react-instafeed';

export default function Instagram(){
    return(
        <div>
            <Instafeed
                limit='5'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-recent'
                target='instafeed'
                template=''
                userId='userIdInstagramApiString'
                clientId='clientIdInstagramApiString'
                accessToken='accessTokenInstagramApiString'
                />
        </div>
    )

}