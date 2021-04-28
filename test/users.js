import supertest from 'supertest';
const request = supertest('http://api.cfl.ca/');
import {expect} from 'chai';

describe('Step-1:', ()  => {
    it('The LEAGUE and SEASON under test', () => {
        const url = 'v1/players?include=points&key=T8Mv9BRDdcB7bMQUsQvHqtCGPewH5y8p';
        request.get(url).end((err, res) => {
            console.log("The LEAGUE is CFL");
            console.log("The SEASON is 2015");
            
            
        });
    });
});

describe('Step-2', ()  => {
    it('fetch all available player scoring stats for the LEAGUE=CFL and SEASON=2015', () => {
        const url = 'v1/players?include=points&key=T8Mv9BRDdcB7bMQUsQvHqtCGPewH5y8p';
        request.get(url).end((err, res) => {
            console.log(err);
            console.log(res.body);
            res.body.data.forEach((data) => {
                if(data.rookie_year==2015){
                console.log(data.first_name+' '+data.last_name);
            }
            })
            
        });
    });
});

describe('Step-3', ()  => {
    it('fetch the standings of teams for the season 2015', () => {
            const url = 'v1/standings/2015?key=T8Mv9BRDdcB7bMQUsQvHqtCGPewH5y8p';
            return request.get(url).then((res) => {
                expect(res.body.data).to.not.be.empty;
                console.log(res.body);
            });
     });
});  

describe('Step-4', ()  => {
    it('fetch the list of games for the season 2015', () => {
        const url = 'v1/games/2015?key=T8Mv9BRDdcB7bMQUsQvHqtCGPewH5y8p';
        return request.get(url). then((res) => {
            expect(res.body.data).to.not.be.empty;
            console.log(res.body);
        });
    });
});

describe('Step-5', ()  => {
    it('fetch all the Teams', () => {
            const url = 'v1/teams?key=T8Mv9BRDdcB7bMQUsQvHqtCGPewH5y8p';
            return request.get(url).then((res) => {
                expect(res.body.data).to.not.be.empty;
                console.log(res.body);
            });
     });
}); 

describe('Step-6', ()  => {
    it('fetch all the Seasons', () => {
            const url = 'v1/seasons?key=T8Mv9BRDdcB7bMQUsQvHqtCGPewH5y8p';
            return request.get(url).then((res) => {
                expect(res.body.data).to.not.be.empty;
                console.log(res.body);
            });
     });
});

describe('Step-7', ()  => {
    it('fetch all the Team Leads', () => {
            const url = 'v1.1/team_leaders/2018/offence/category/game_stats?key=T8Mv9BRDdcB7bMQUsQvHqtCGPewH5y8p';
            return request.get(url).then((res) => {
                expect(res.body.data).to.not.be.empty;
                console.log(res.body);
            });
     });
});

