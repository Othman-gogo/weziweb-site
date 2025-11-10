// Profile & Settings - Goal adjust, wearable connect, reminders
import { User, Settings, Watch, Target, Fire, Trophy } from "./icons";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

export const ProfileScreen = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8">Profile & Settings</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile View */}
          <div>
            <h4 className="mb-4 text-muted-foreground">User Profile</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-y-auto">
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2>Profile</h2>
                    <button className="text-muted-foreground">
                      <Settings className="w-6 h-6" />
                    </button>
                  </div>

                  {/* User Info */}
                  <div className="bg-surface rounded-2xl p-5 border border-border mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-20 h-20 border-4 border-[#B8FF37]">
                        <AvatarFallback className="bg-[#B8FF37] text-[#121212] text-2xl">
                          AK
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="mb-1">Alex Kendra</h3>
                        <div className="text-muted-foreground">alex.kendra@email.com</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-background rounded-xl p-3 text-center">
                        <div className="text-[#B8FF37]">124</div>
                        <div className="text-muted-foreground">Workouts</div>
                      </div>
                      <div className="bg-background rounded-xl p-3 text-center">
                        <div className="text-[#00E5FF]">12</div>
                        <div className="text-muted-foreground">Streak</div>
                      </div>
                      <div className="bg-background rounded-xl p-3 text-center">
                        <div className="text-[#FF0055]">8</div>
                        <div className="text-muted-foreground">Badges</div>
                      </div>
                    </div>
                  </div>

                  {/* Goals */}
                  <h4 className="mb-3">Fitness Goals</h4>
                  <div className="space-y-3 mb-6">
                    <div className="bg-surface rounded-xl p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-[#B8FF37]" />
                          <span>Primary Goal</span>
                        </div>
                        <button className="text-[#B8FF37]">Edit</button>
                      </div>
                      <div className="text-muted-foreground">Build Muscle</div>
                    </div>
                    <div className="bg-surface rounded-xl p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Fire className="w-5 h-5 text-[#FF0055]" />
                          <span>Weekly Goal</span>
                        </div>
                        <button className="text-[#B8FF37]">Edit</button>
                      </div>
                      <div className="text-muted-foreground">5 workouts • 225 min</div>
                    </div>
                  </div>

                  {/* Wearables */}
                  <h4 className="mb-3">Connected Devices</h4>
                  <div className="space-y-3 mb-6">
                    <div className="bg-surface rounded-xl p-4 border border-[#B8FF37]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#B8FF37] bg-opacity-20 rounded-xl flex items-center justify-center">
                            <Watch className="w-5 h-5 text-[#B8FF37]" />
                          </div>
                          <div>
                            <div>Apple Watch</div>
                            <div className="text-muted-foreground">Connected</div>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-[#B8FF37] rounded-full" />
                      </div>
                    </div>
                    <div className="bg-surface rounded-xl p-4 border border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#2A2A2A] rounded-xl flex items-center justify-center">
                            <Watch className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <div className="text-muted-foreground">Fitbit</div>
                            <div className="text-muted-foreground">Not connected</div>
                          </div>
                        </div>
                        <button className="text-[#B8FF37]">Connect</button>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <h4 className="mb-3">Achievements</h4>
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                      { emoji: '🏆', name: 'Champion' },
                      { emoji: '🔥', name: 'Streak' },
                      { emoji: '💪', name: 'Strength' },
                      { emoji: '⚡', name: 'Speed' },
                    ].map((badge, i) => (
                      <div
                        key={i}
                        className="bg-surface rounded-xl p-3 border border-border text-center"
                      >
                        <div className="text-2xl mb-1">{badge.emoji}</div>
                        <div className="text-muted-foreground" style={{ fontSize: '10px' }}>
                          {badge.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings View */}
          <div>
            <h4 className="mb-4 text-muted-foreground">Settings</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-y-auto">
                <div className="p-6">
                  <h2 className="mb-6">Settings</h2>

                  {/* Notifications */}
                  <h4 className="mb-3">Notifications</h4>
                  <div className="bg-surface rounded-2xl p-4 border border-border mb-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="mb-1">Workout Reminders</div>
                          <div className="text-muted-foreground">Daily at 6:00 PM</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="mb-1">Streak Alerts</div>
                          <div className="text-muted-foreground">Don't break your streak</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="mb-1">Achievement Notifications</div>
                          <div className="text-muted-foreground">New badges & milestones</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="mb-1">Social Updates</div>
                          <div className="text-muted-foreground">Friend activities</div>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  {/* Preferences */}
                  <h4 className="mb-3">Preferences</h4>
                  <div className="bg-surface rounded-2xl p-4 border border-border mb-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Units</span>
                        <button className="text-[#B8FF37]">Metric</button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Theme</span>
                        <button className="text-[#B8FF37]">Dark</button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Language</span>
                        <button className="text-[#B8FF37]">English</button>
                      </div>
                    </div>
                  </div>

                  {/* Privacy */}
                  <h4 className="mb-3">Privacy & Data</h4>
                  <div className="bg-surface rounded-2xl p-4 border border-border mb-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="mb-1">Profile Visibility</div>
                          <div className="text-muted-foreground">Public profile</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="mb-1">Activity Sharing</div>
                          <div className="text-muted-foreground">Share workouts</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <button className="w-full text-left text-muted-foreground">
                        Manage Data & Privacy →
                      </button>
                    </div>
                  </div>

                  {/* Subscription */}
                  <h4 className="mb-3">Subscription</h4>
                  <div className="bg-gradient-to-br from-[#B8FF37]/20 to-[#00E5FF]/20 rounded-2xl p-5 border border-[#B8FF37] mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-5 h-5 text-[#B8FF37]" />
                      <span className="text-[#B8FF37]">Pro Member</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Access to all premium features and AI coaching
                    </p>
                    <Button className="w-full bg-[#B8FF37] text-[#121212] hover:bg-[#A0E030] rounded-xl">
                      Manage Subscription
                    </Button>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 mb-6">
                    <button className="w-full bg-surface border border-border rounded-xl p-4 text-left text-muted-foreground">
                      Help & Support
                    </button>
                    <button className="w-full bg-surface border border-border rounded-xl p-4 text-left text-muted-foreground">
                      About FitLife
                    </button>
                    <button className="w-full bg-surface border border-[#FF0055] rounded-xl p-4 text-left text-[#FF0055]">
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Notes */}
        <div className="mt-8 bg-surface p-6 rounded-2xl border border-border">
          <h3 className="mb-4">Profile & Settings Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h4 className="text-foreground mb-2">Profile</h4>
              <ul className="space-y-1">
                <li>• User stats & achievements</li>
                <li>• Editable fitness goals</li>
                <li>• Connected device management</li>
                <li>• Achievement badge showcase</li>
                <li>• Quick stats overview</li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-2">Settings</h4>
              <ul className="space-y-1">
                <li>• Granular notification controls</li>
                <li>• Customizable reminders</li>
                <li>• Privacy & data management</li>
                <li>• Subscription management</li>
                <li>• Unit & theme preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
