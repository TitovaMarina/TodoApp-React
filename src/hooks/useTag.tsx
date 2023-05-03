import React from 'react';
import { TagContext } from '../utils/contextes/TagContext';

export const useTag = () => React.useContext(TagContext);
