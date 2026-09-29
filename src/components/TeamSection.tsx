import React, { useState } from 'react';
import { Camera, User } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/siteData';

export const TeamSection: React.FC = () => {
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});

  const handlePhotoUpload = (memberId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setCustomPhotos((prev) => ({
      ...prev,
      [memberId]: objectUrl,
    }));
  };

  return (
    <section className="py-16 md:py-20 border-t border-sky-400/15">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Our Team
          </h2>
          <p className="mt-2.5 text-base text-slate-300 leading-relaxed">
            Meet the friendly people behind Bright Digitals in Addis Ababa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {TEAM_MEMBERS.map((member: TeamMember) => {
            const uploadedPhoto = customPhotos[member.id];

            return (
              <div
                key={member.id}
                className="bg-[#0A1D3B] border border-sky-400/15 rounded-xl p-5 flex flex-col justify-between transition-colors duration-150 hover:border-sky-400/50"
              >
                <div>
                  {/* Simple Placeholder Photo Frame */}
                  <div className="relative aspect-square w-full rounded-lg bg-[#051024] border border-sky-400/15 overflow-hidden mb-4 flex flex-col items-center justify-center group">
                    {uploadedPhoto ? (
                      <img
                        src={uploadedPhoto}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-4">
                        <div className="w-16 h-16 rounded-full bg-[#0F2952] border border-sky-400/35 flex items-center justify-center text-sky-400 mb-2.5">
                          <User className="w-8 h-8 stroke-[1.75]" />
                        </div>
                        <span className="text-xs font-medium text-slate-400">
                          Photo Placeholder
                        </span>
                      </div>
                    )}

                    {/* Optional interactive photo previewer so real photos can be tested anytime */}
                    <label
                      htmlFor={`team-photo-${member.id}`}
                      className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A1D3B]/90 hover:bg-sky-400 text-slate-200 hover:text-[#051024] border border-sky-400/25 text-xs font-medium cursor-pointer transition-colors duration-150 whitespace-nowrap"
                      title="Upload a photo to preview"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{uploadedPhoto ? 'Change' : 'Add Photo'}</span>
                      <input
                        id={`team-photo-${member.id}`}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePhotoUpload(member.id, e)}
                        className="sr-only"
                      />
                    </label>
                  </div>

                  {/* Member Name & Role */}
                  <h3 className="text-base font-semibold text-white leading-snug">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-sky-400">
                    {member.role}
                  </p>
                </div>

                <p className="mt-3 pt-3 border-t border-sky-400/10 text-xs text-slate-400 leading-relaxed">
                  {member.focus}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
