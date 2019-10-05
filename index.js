function workingSite() {
var band = [
    'https://open.spotify.com/album/2kPGKJvJg0CI2TPDdYjNAB',
    'https://open.spotify.com/album/0DJFrh8Wchu7IpScELuwl6',
    'https://open.spotify.com/album/2cOHTdh4UVY4f80TelZq1u',
    'https://open.spotify.com/album/1g37MKEl3KjcZpvoqXKY8Q',
    'https://open.spotify.com/album/0M7tQoeNswwZhAKa8uibV9',
    'https://open.spotify.com/album/2trzgjuZEtD2tlIL1EjONv',
    'https://open.spotify.com/album/7D4f6nyoKlrg6VKZ7t6vBh',
    'https://open.spotify.com/album/21l8vD1kXPG1Uj03dA1KFH',
    'https://open.spotify.com/album/1RaKlRMQcQWUgdhAwSFFJQ',
    'https://open.spotify.com/album/2av6VdXZ0qJWgdTsZAdqj9',
    'https://open.spotify.com/album/0JSC85wZIL0u7uwbO2rv5J',
    'https://open.spotify.com/album/7HJZpfOka4PBLalqcOLlpo',
    'https://open.spotify.com/album/3Rje64ND59VtJQ7Sl8kwq3',
    'https://open.spotify.com/album/7JK4S80gnlL0DLKp921ujD',
    'https://open.spotify.com/album/3HTCoWNSO2UGZ23oKRRGGM',
    'https://open.spotify.com/album/0U5jIPyGGreighvPHOwmTR',
    'https://open.spotify.com/album/5gHeA1IYYEDZoGMPoNgmjP',
    'https://open.spotify.com/album/6Z367XrT4LaM3FM4YsfjVx',
    'https://open.spotify.com/album/2q37f0ENUtmnmirBelFjAC',
    'https://open.spotify.com/album/5qyj79rRuklEu1jUW4QqQp',
    'https://open.spotify.com/album/4Er8RIEydm06IqIgRpjcMQ',
    'https://open.spotify.com/album/3p3GF7VSuEKUc6NQWhxkIx',
    'https://open.spotify.com/album/7hr3r7aKVeEIdLct1wXOnW',
    'https://open.spotify.com/album/0mKfDHGWsLKZcHKLmlZ4Oe',
    'https://open.spotify.com/album/5FdDMp7425H7byWJfb2zVP',
    'https://open.spotify.com/album/3cUo4OJPMLOWesOn7DshRW',
    'https://open.spotify.com/album/4OYllqJB6dZzQ1n03lhwg9',
    'https://open.spotify.com/album/4ztRorEnqKLAv2ohF234gf',
    'https://open.spotify.com/album/30ACaprlZ2SsyZwT55CBlD',
    'https://open.spotify.com/album/7IhHxTiSqgD7JcdMV8mINF',
    'https://open.spotify.com/album/6vZszIMZ7Spzca3C7QSgaY',
    'https://open.spotify.com/album/0SHDcJOJBHp3VGot6A8JMS',
    'https://open.spotify.com/album/4ygyND85sM13LJdH75qR2v',
    'https://open.spotify.com/album/2It2ZoywciLk4zgFO65ZPK',
    'https://open.spotify.com/album/3FXGZSleicxFP8J2zyiZgu',
    'https://open.spotify.com/album/4tCjb5obtTHPz3jKwZgUrs',
    'https://open.spotify.com/album/6Ia2sw3y79k40GHeNjCfLh',
    'https://open.spotify.com/album/6wsNQ0GmEItYhZak4feBS7',
    'https://open.spotify.com/album/2O6EhNb0dWg4qgA9yt8Aro',
    'https://open.spotify.com/album/5NWcRL5T0NhuE3N6XggV6M',
    'https://open.spotify.com/album/0PfW1LEDjtcQaYA94p0Rkb',
    'https://open.spotify.com/album/14cpPDkOj2c9oaZBddqOw2',
    'https://open.spotify.com/album/2mXvYRDywmImKtoUcC1TKK',
    'https://open.spotify.com/album/1bvP284DaUaORsAONQTBMY',
    'https://open.spotify.com/album/6vaUHBfp2ib448kDw5KGwR',
    'https://open.spotify.com/album/24FvyKjULF8pot6794gzBI',
    'https://open.spotify.com/album/4uWjkDLlhMsVb0KAlk4lbD',
    'https://open.spotify.com/album/0h2rDg9Mdfl1kQTVeznEty',
    'https://open.spotify.com/album/2FMGqUgaV5vyWRABVeW04V',
    'https://open.spotify.com/album/5GQ2t0aTsVvziPxR0s7rhf',
    'https://open.spotify.com/album/4hVIufZ0wDYDo64FzY81lf',
    'https://open.spotify.com/album/6DZNVDzizEmTEvpKEATkPH',
    'https://open.spotify.com/album/5JsFhG2RtuW03jN42pE5KG',
    'https://open.spotify.com/album/5MvrwYrdaOUUy3dkXXDXkc',
    'https://open.spotify.com/album/4oi6DxgouCsmf9Jk4NGCMR',
    'https://open.spotify.com/album/2nZwh0vvAdoeEHWEs6Cmaj',
    'https://open.spotify.com/album/2nZwh0vvAdoeEHWEs6Cmaj',
    'https://open.spotify.com/album/136I3zr7xnBoy91hfi66FJ',
    'https://open.spotify.com/album/69dl4uZ2iHY1EYizzxHwXG',
    'https://open.spotify.com/album/5EUXlXcQMU1WOQm2p27kYe',
    'https://open.spotify.com/album/5xGZN3mTCTglKzOaa8hBwi',
    'https://open.spotify.com/album/3Yncz47Y6OKhwkWYvCdLhO',
    'https://open.spotify.com/album/6vMHo4nTaLGrQNf4Iey6mv',
    'https://open.spotify.com/album/4tCzrHhdqQ8CiM9e3tZR0F',
    'https://open.spotify.com/album/2y2ncRDm2d0SoyAChDC6jy',
    'https://open.spotify.com/album/7bm5Lf93EE2bB5h6t0OjKV',
    'https://open.spotify.com/album/6A8waHw5O283BzA1B0w8PY',
    'https://open.spotify.com/album/1pmtdUy552s8Oy3FRF3j8x',
    'https://open.spotify.com/album/2nOKzaZcSfPn8lvZGJEFz7',
    'https://open.spotify.com/album/48ifIFOYY23rbmzJn80gN9',
    'https://open.spotify.com/album/3gnrscBK1GRnFyHwvi0544',
    'https://open.spotify.com/album/4Tcgre8MDM64YcQeCLY8ju',
    'https://open.spotify.com/album/4S58uP6IPglSUO3UDbahRM',
    'https://open.spotify.com/album/4qvZ2pUy4LN9nCZ7BHiHic',
    'https://open.spotify.com/album/1E2LbIIeKLqKT8cyp5ig8t',
    'https://open.spotify.com/album/2CQ2dGh6U6Ssbz0t8RyjrE',
    'https://open.spotify.com/album/1u8ZoNacS2TAjNBDc2eecp',
    'https://open.spotify.com/album/78OaNCgtn4kLfU9IC2Lw6i',
    'https://open.spotify.com/album/5ulibSBuKuLfEBMeuOe1De',
    'https://open.spotify.com/album/55qMSsA766ddrL1jOb00zI',
    'https://open.spotify.com/album/0VTsYwWfgeGrtsmZXBED57',
    'https://open.spotify.com/album/0tiivwe6ncMYQHW1QOKRKh',
    'https://open.spotify.com/album/7bgi7zCoDsZdlLKPonHZqP',
    'https://open.spotify.com/album/3VRPrDeQHoLl2hY6aBgQCX',
    'https://open.spotify.com/album/6e8dqRS7OiFAcNHSDI7xb7',
    'https://open.spotify.com/album/6wQmnMUKfzvInZAOPAIeH2',
    'https://open.spotify.com/album/6EDLX245U4Uh9iO543xo4v',
    'https://open.spotify.com/album/1gfe5x4eQmjYWENvu6cmci',
    'https://open.spotify.com/album/7zZH9XxueOQVrwxNcXyI28',
    'https://open.spotify.com/album/6eaQnw5UqF0jUANhOjTB1n',
    'https://open.spotify.com/album/24mTbabIfcPYpqFhzn70HQ',
    'https://open.spotify.com/album/1kA36zBinlnQzJOOM3Xo1m',
    'https://open.spotify.com/album/05ZhfwayNPbRLHWAKmftea',
    'https://open.spotify.com/album/3abwtJjY1YoTBVWYsDjWdz',
    'https://open.spotify.com/album/5fXU7CPOLut6tRryEtQEEH',
    'https://open.spotify.com/album/7y4lCnCKcXODt9Qh2bsQU2',
    'https://open.spotify.com/album/08D0Jby6PtRWX9io6dQamA',
    'https://open.spotify.com/album/1zTazF7H2MoCLajKlmGQ3V',
    'https://open.spotify.com/album/5jk4XQ30TG2OOheSlEwY1Z',
    'https://open.spotify.com/album/1aLP4fCY2KGAkR49YArBDk',
    'https://open.spotify.com/album/5gxoKngxrfPdm8BPlsnB5m',
    'https://open.spotify.com/album/4JLJac0pgIRV4Gie86Mrk6',
    'https://open.spotify.com/album/2Wxjq5v0aWRD6ZkLd091c1',
    'https://open.spotify.com/album/1oGsfPf2MzsctniqNsDZFy',
    'https://open.spotify.com/album/0iUC4DRrYWNZfxs93ynYzZ',
    'https://open.spotify.com/album/4vL8d3qmJskO47ZHb01tCs',
    'https://open.spotify.com/album/1m9pVpzjKj4FLXW7GIqIJh',
    'https://open.spotify.com/album/2q9SIgBwOU7TUKWwwEYKNW'
];



var generateBand = band[Math.floor(Math.random()*band.length)];
window.open(generateBand);

};







