import { Modal } from '@/helpers/interfaces';
import Image from 'next/image';
import SubSection from '../SubSection';

import leftLine from '@/public/left-line.svg';
import rightLine from '@/public/right-line.svg';
import expLogo from '@/public/EXP.svg';
import closeIcon from '@/public/close.svg';
import {
	BottomWrapper,
	BoxWrapper,
	Button,
	CloseWrapper,
	DescriptionWrapper,
	ExpLogo,
	ExpLogoWrapper,
	ExpWrapper,
	ImageContainer,
	LeftWrapper,
	MiniWrapper,
	QuestWrapper,
	RewardsWrapper,
	RightWrapper,
	Title,
	TitleWrapper,
	Wrapper,
	LineWrapper
} from './styles';
import { cinzel, lato } from '@/components/utils/constants';

export default function TheQuestModal({ theQuest, onClose }: Modal): JSX.Element {
	return (
		<QuestWrapper>
			<ImageContainer>
				<Image
					src={theQuest.cover}
					alt={theQuest.title}
					fill
					style={{ objectFit: 'cover' }}
					sizes='(max-width: 768px) 100vw'
					priority
				/>
				<CloseWrapper onClick={() => onClose()}>
					<Image src={closeIcon} alt='' />
				</CloseWrapper>
			</ImageContainer>
			<TitleWrapper>
				<LineWrapper>
					<Image src={leftLine} alt='' />
				</LineWrapper>
				<Title className={cinzel.className}>{theQuest.title}</Title>
				<LineWrapper>
					<Image src={rightLine} alt='' />
				</LineWrapper>
			</TitleWrapper>
			<Wrapper>
				<MiniWrapper>
					<SubSection title='Skill Tree' desc={theQuest.skillTree} />
					<SubSection title='Skill' desc={theQuest.skill} />
				</MiniWrapper>
				<MiniWrapper>
					<SubSection title='Difficulty' difficulty={theQuest.difficulty} />
					<SubSection title='Quest Type' desc={theQuest.type} />
				</MiniWrapper>
			</Wrapper>
			<DescriptionWrapper className={lato.className}>{theQuest.description}</DescriptionWrapper>
			<BottomWrapper>
				<LeftWrapper>
					<RewardsWrapper className={cinzel.className}>Quest Rewards</RewardsWrapper>
					<BoxWrapper>
						<ExpLogoWrapper>
							<ExpLogo>
								<Image src={expLogo} alt='' />
							</ExpLogo>
						</ExpLogoWrapper>
						<ExpWrapper className={cinzel.className}>{`+ ${theQuest.experience}`}</ExpWrapper>
					</BoxWrapper>
				</LeftWrapper>
				<RightWrapper>
					<Button className={cinzel.className} onClick={() => onClose()}>
						Go Back
					</Button>
				</RightWrapper>
			</BottomWrapper>
		</QuestWrapper>
	);
}
