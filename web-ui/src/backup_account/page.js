/*
 * Copyright (c) 2017 ThoughtWorks, Inc.
 *
 * Pixelated is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pixelated is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pixelated. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import { translate } from 'react-i18next';
import DocumentTitle from 'react-document-title';
import SubmitButton from 'src/common/submit_button/submit_button';
import InputField from 'src/common/input_field/input_field';
import Footer from 'src/common/footer/footer';
import Header from 'src/common/header/header';

import './page.scss';

export const Page = ({ t }) => (
  <DocumentTitle title={t('backup-account.page-title')}>
    <div className='page'>
      <Header />
      <section>
        <div className='container'>
          <img
            className='backup-account-image'
            src='assets/images/forgot-my-password.svg'
            alt={t('backup-account.image-description')}
          />
          <form>
            <h1>{t('backup-account.title')}</h1>
            <p>{t('backup-account.paragraph1')}</p>
            <p>{t('backup-account.paragraph2')}</p>
            <InputField name='email' label={t('backup-account.input-label')} />
            <SubmitButton buttonText={t('backup-account.button')} />
            <div>
              <a href='/' className='link'>
                <i className='fa fa-angle-left' aria-hidden='true' />
                <span>{t('back-to-inbox')}</span>
              </a>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  </DocumentTitle>
);

Page.propTypes = {
  t: React.PropTypes.func.isRequired
};

export default translate('', { wait: true })(Page);
