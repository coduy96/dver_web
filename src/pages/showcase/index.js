/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect} from 'react';

// import Image from '@theme/IdealImage';

import Layout from '@theme/Layout';
import Image from '@theme/IdealImage';

import classnames from 'classnames';
import styles from './styles.module.css';
import users from '../../data/users';
const TITLE = 'Dver Mobile App Showcase';
const DESCRIPTION =
  'List of mobile apps that are building with Dver';

function Showcase() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION}</p>
        </div>
        <div className="row">
          {users.map(user => (
            <div key={user.title} className="col col--4 margin-bottom--lg">
              <div className={classnames('card', styles.showcaseUser)}>
                <div className="card__image">
                  {/* <Image src={user.preview} alt={user.title} /> */}
                  <Image img={user.preview} />

                  {/* <Image img={require(user.preview)} /> */}
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">{user.title}</h4>
                      <small className="avatar__subtitle">
                        {user.description}
                      </small>
                    </div>
                  </div>
                </div>
                {(user.website || user.source) && (
                  <div className="card__footer">
                    <div className="button-group button-group--block">
                      {user.source && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={user.source}
                          target="_blank"
                          rel="noreferrer noopener">
                          Detail
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Showcase;