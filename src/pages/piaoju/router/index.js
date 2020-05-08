import React from 'react';
import {renderRoutes} from 'react-router-config'
import config from './config'
import Catchapp from '../../../components/Catchapp'




const Index = () => <Catchapp>{renderRoutes(config)}</Catchapp>
export default Index
