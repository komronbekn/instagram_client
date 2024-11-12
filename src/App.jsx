import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Search from './pages/Search';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Actions from './pages/Actions';
import Saved from './pages/saved';
import Problem from './pages/Problem';
import Switching from './pages/Switching';
import Messenger from './pages/Messages';
import ContentVisibility from './pages/ContentVisibility';
import AccountPrivacy from './pages/AccountPrivacy';
import CloseFriends from './pages/CloseFriends';
import Blocked from './pages/Blocked';
import StorySharing from './pages/StorySharing';
import MessagesReplies from './pages/MessagesReplies';
import TagsMentions from './pages/TagsMentions';
import Comments from './pages/Comments';
import Reposts from './pages/Reposts';
import RestrictedAccounts from './pages/RestrictedAccounts';
import HiddenWords from './pages/HiddenWords';
import HiddenAccounts from './pages/HiddenAccounts';
import ContentPreferences from './pages/ContentPreferences';
import LikesRepostsCount from './pages/LikesRepostsCount';
import PremiumSubscriptions from './pages/PremiumSubscriptions';
import ArchiveDown from './pages/ArchiveDown';
import Languages from './pages/Languages';
import Site from './pages/Site';
import FamilyCenter from './pages/FamilyCenter';
import AccountTool from './pages/AccountTool';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import Status from './pages/Status';
import PersonalInfo from './pages/PersonalInfo';
import PasswordSecurity from './pages/PasswordSecurity';
import Preferences from './pages/Preferences';
import AccountCentre from './pages/AccountCentre';



const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};
const Main = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/';
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // State for Create modal

  const toggleCreateModal = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
  };
  return (
    <div className={`flex flex-col md:flex-row  min-h-screen`}>
      {!isLoginPage && (
        <div
          className={`w-full md:w-64 ${isLoginPage ? 'hidden' : 'block'} 
                      md:fixed md:left-0 md:top-0 md:h-screen border-r border-gray-300
                      md:flex md:flex-col bg-white md:pb-0 `}
        >
          <Sidebar />
        </div>
      )}
      <div
        className={`flex-1 md:mb-0 mb-16 ml-0 md:ml-64 ${isLoginPage ? 'flex justify-center items-center' : 'mt-0'}`}
      >
        <Routes>
          <Route path="/settings/content-visibility" element={<ContentVisibility />} />
          <Route path="/settings/close-friends" element={<CloseFriends />} />
          <Route path="/settings/account-privacy" element={<AccountPrivacy />} />
          <Route path="/settings/blocked" element={<Blocked />} />
          <Route path="/settings/story-sharing" element={<StorySharing />} />
          <Route path="/settings/messages-replies" element={<MessagesReplies />} />
          <Route path="/settings/tags-mentions" element={<TagsMentions />} />
          <Route path="/settings/comments" element={<Comments />} />
          <Route path="/settings/reposts" element={<Reposts />} />
          <Route path="/settings/restricted-accounts" element={<RestrictedAccounts />} />
          <Route path="/settings/hidden-words" element={<HiddenWords />} />
          <Route path="/settings/hidden-accounts" element={<HiddenAccounts />} />
          <Route path="/settings/content-preferences" element={<ContentPreferences />} />
          <Route path="/settings/likes-reposts-count" element={<LikesRepostsCount />} />
          <Route path="/settings/premium-subscriptions" element={<PremiumSubscriptions />} />
          <Route path="/settings/archiving-downloads" element={<ArchiveDown />} />
          <Route path="/settings/site-permissions" element={<Site />} />
          <Route path="/settings/language" element={<Languages />} />
          <Route path="/settings/family-center" element={<FamilyCenter />} />
          <Route path="/settings/professional-account-tools" element={<AccountTool />} />
          <Route path="/settings/help" element={<Help />} />
          <Route path="/settings/privacy-center" element={<Privacy />} />
          <Route path="/settings/account-status" element={<Status />} />
          <Route path="/meta-account-center/personal-info" element={<PersonalInfo />} />
          <Route path="/meta-account-center/password-security" element={<PasswordSecurity />} />
          <Route path="/meta-account-center/ad-preferences" element={<Preferences />} />
          <Route path="/meta-account-center" element={<AccountCentre />} />
          <Route path="/settings/notifications" element={<Notifications />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messenger />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/create" element={<Create toggleCreateModal={toggleCreateModal} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/switching" element={<Switching />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
